/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides the JSON model implementation of a list binding
jQuery.sap.declare("sap.ui.model.ClientListBinding");
jQuery.sap.require("sap.ui.model.ListBinding");
jQuery.sap.require("sap.ui.model.FilterType");


/**
 *
 * @class
 * @abstract
 * List binding implementation for client models
 *
 * @param sPath
 * @param [oModel]
 * @name sap.ui.model.ClientListBinding
 * @extends sap.ui.model.ListBinding
 */
sap.ui.model.ListBinding.extend("sap.ui.model.ClientListBinding", /** @lends sap.ui.model.ClientListBinding */ {

	constructor : function(oModel, sPath, oContext, aSorters, aFilters, mParameters){
		sap.ui.model.ListBinding.apply(this, arguments);
		this.update();
	},

	metadata : {
		publicMethods : [
			"getLength"
		]
	}

});

/**
 * Return contexts for the list or a specified subset of contexts
 * @param {int} [iStartIndex=0] the startIndex where to start the retrieval of contexts
 * @param {int} [iLength=length of the list] determines how many contexts to retrieve beginning from the start index.
 * Default is the whole list length.
 *
 * @return {Array} the contexts array
 * @private
 */
sap.ui.model.ClientListBinding.prototype._getContexts = function(iStartIndex, iLength) {
	if (!iStartIndex) {
		iStartIndex = 0;
	}
	if (!iLength) {
		iLength = Math.min(this.iLength, this.oModel.iSizeLimit);
	}
	
	var iEndIndex = Math.min(iStartIndex + iLength, this.aIndices.length),
	oContext,
	aContexts = [],
	sPrefix = this.oModel.resolve(this.sPath, this.oContext);
	
	if (sPrefix && !jQuery.sap.endsWith(sPrefix, "/")) {
		sPrefix += "/";
	}		

	for (var i = iStartIndex; i < iEndIndex; i++) {
		oContext = this.oModel.getContext(sPrefix + this.aIndices[i]);
		aContexts.push(oContext);
	}
	
	return aContexts;
};

/**
 * Setter for context
 * @param {Object} oContext the new context object
 */
sap.ui.model.ClientListBinding.prototype.setContext = function(oContext) {
	if (this.oContext != oContext) {
		this.oContext = oContext;
		if (this.isRelative()) {
			this.update();
			this._fireChange({reason: sap.ui.model.ChangeReason.Context});
		}
	}
};

/**
 * Return the length of the list
 *
 * @return {int} the length
 * @protected
 */
sap.ui.model.ClientListBinding.prototype.getLength = function() {
	return this.iLength;
};

/**
 * Return the length of the list
 *
 * @return {int} the length
 */
sap.ui.model.ClientListBinding.prototype._getLength = function() {
	return this.aIndices.length;
};

/**
 * Get indices of the list
 */
sap.ui.model.ClientListBinding.prototype.updateIndices = function(){
	this.aIndices = [];
	for (var i = 0; i < this.oList.length; i++) {
		this.aIndices.push(i);
	}

};

/**
 * @see sap.ui.model.ListBinding.prototype.sort
 *
 */
sap.ui.model.ClientListBinding.prototype.sort = function(aSorters){
	if (!aSorters) {
		this.aSorters = null;
		this.updateIndices();
		this.applyFilter();
	} else {
		if (aSorters instanceof sap.ui.model.Sorter) {
			aSorters = [aSorters];
		}
		this.aSorters = aSorters;
		this.applySort();
	}
	this._fireChange({reason: sap.ui.model.ChangeReason.Sort});
	// TODO remove this if the sorter event gets removed which is deprecated
	this._fireSort({sorter: aSorters}); 
	return this;
};

/**
 * Sorts the list
 * @private
 */
sap.ui.model.ClientListBinding.prototype.applySort = function(){
	var that = this,
		aSortValues = [],
		aCompareFunctions = [],
		oValue,
		oSorter;

	if (!this.aSorters || this.aSorters.length == 0) {
		return;
	}
	
	
	for(var j=0; j<this.aSorters.length; j++) {
		oSorter = this.aSorters[j];
		aCompareFunctions[j] = oSorter.fnCompare;
		
		if (!aCompareFunctions[j]) {
			aCompareFunctions[j] = function(a, b) {
				if (b == null) {
					return -1;
				}
				if (a == null) {
					return 1;
				}
				if (typeof a == "string" && typeof b == "string") {
					return a.localeCompare(b);
				}
				if (a < b) {
					return -1;
				}
				if (a > b) {
					return 1;
				}
				return 0;
			}
		}
		jQuery.each(this.aIndices, function(i, iIndex) {
			oValue = that.oModel.getProperty(oSorter.sPath, that.oList[iIndex]);
			if (typeof oValue == "string") {
				oValue = oValue.toLocaleUpperCase();
			}
			if (!aSortValues[j]) {
				aSortValues[j] = [];
			}
			aSortValues[j][iIndex] = oValue;
		});
	}

	this.aIndices.sort(function(a, b) {
		var valueA = aSortValues[0][a],
			valueB = aSortValues[0][b];
		
		return that._applySortCompare(a, b, valueA, valueB, aSortValues, aCompareFunctions, 0);
	});
};

sap.ui.model.ClientListBinding.prototype._applySortCompare = function(a, b, valueA, valueB, aSortValues, aCompareFunctions, iDepth){
	var oSorter = this.aSorters[iDepth],
		fnCompare = aCompareFunctions[iDepth],
		returnValue;

	returnValue = fnCompare(valueA, valueB);
	if (oSorter.bDescending) {
		returnValue = -returnValue;
	}
	if (returnValue == 0 && this.aSorters[iDepth + 1]) {
		valueA = aSortValues[iDepth + 1][a],
		valueB = aSortValues[iDepth + 1][b];
		returnValue = this._applySortCompare(a, b, valueA, valueB, aSortValues, aCompareFunctions, iDepth + 1);
	}
	return returnValue;
};

/**
 * Filters the list.
 * 
 * Filters are first grouped according to their binding path.
 * All filters belonging to a group are ORed and after that the
 * results of all groups are ANDed.
 * Usually this means, all filters applied to a single table column
 * are ORed, while filters on different table columns are ANDed.
 * 
 * @param {sap.ui.model.Filter[]} aFilters Array of filter objects
 * @param {sap.ui.model.FilterType} sFilterType Type of the filter which should be adjusted, if it is not given, the standard behaviour applies
 * @return {sap.ui.model.ListBinding} returns <code>this</code> to facilitate method chaining 
 * 
 * @public
 */
sap.ui.model.ClientListBinding.prototype.filter = function(aFilters, sFilterType){
	this.updateIndices();
	if (aFilters instanceof sap.ui.model.Filter) {
		aFilters = [aFilters];
	}
	if (sFilterType == sap.ui.model.FilterType.Application) {
		this.aApplicationFilters = aFilters || [];
	} else if (sFilterType == sap.ui.model.FilterType.Control) {
		this.aFilters = aFilters || [];
	} else {
		//Previous behaviour
		this.aFilters = aFilters || [];
		this.aApplicationFilters = [];
	}
	aFilters = this.aFilters.concat(this.aApplicationFilters);
	if (aFilters.length == 0) {
		this.aFilters = [];
		this.aApplicationFilters = [];
		this.iLength = this._getLength();
	} else {
		this.applyFilter();
	}
	this.applySort();
	this._fireChange({reason: sap.ui.model.ChangeReason.Filter});
	// TODO remove this if the filter event gets removed which is deprecated
	if (sFilterType == sap.ui.model.FilterType.Application) {
		this._fireFilter({filters: this.aApplicationFilters});
	} else {
		this._fireFilter({filters: this.aFilters});
	}
	return this;
};

/**
 * Filters the list
 * Filters are first grouped according to their binding path.
 * All filters belonging to a group are ORed and after that the
 * results of all groups are ANDed.
 * Usually this means, all filters applied to a single table column
 * are ORed, while filters on different table columns are ANDed.
 * Multiple MultiFilters are ORed.
 *
 * @private
 */
sap.ui.model.ClientListBinding.prototype.applyFilter = function(){
	if (!this.aFilters) {
		return;
	}
	var that = this,
		oFilterGroups = {},
		aFilterGroup,
		aFiltered = [],
		bGroupFiltered = false,
		bFiltered = true,
		aFilters = this.aFilters.concat(this.aApplicationFilters);

	jQuery.each(aFilters, function(j, oFilter) {
		if (oFilter.sPath) {
			aFilterGroup = oFilterGroups[oFilter.sPath];
			if (!aFilterGroup) {
				aFilterGroup = oFilterGroups[oFilter.sPath] = [];
			}
		} else {
			aFilterGroup = oFilterGroups["__multiFilter"];
			if (!aFilterGroup) {
				aFilterGroup = oFilterGroups["__multiFilter"] = [];
			}
		}
		aFilterGroup.push(oFilter);
	});
	jQuery.each(this.aIndices, function(i, iIndex) {
		bFiltered = true;
		jQuery.each(oFilterGroups, function(sPath, aFilterGroup) {
			if (sPath !== "__multiFilter") {
				var oValue = that.oModel.getProperty(sPath, that.oList[iIndex]);
				if (typeof oValue == "string") {
					oValue = oValue.toUpperCase();
				}
				bGroupFiltered = false;
				jQuery.each(aFilterGroup, function(j, oFilter) {
					var fnTest = that.getFilterFunction(oFilter);
					if (oValue != undefined && fnTest(oValue)) {
						bGroupFiltered = true;
						return false;
					}
				});
			} else {
				bGroupFiltered = false;
				jQuery.each(aFilterGroup, function(j, oFilter) {
					bGroupFiltered = that._resolveMultiFilter(oFilter, iIndex);
					if (bGroupFiltered) {
						return false;
					}
				});
			}
			if (!bGroupFiltered) {
				bFiltered = false;
				return false;
			}
		});
		if (bFiltered) {
			aFiltered.push(iIndex);
		}
	});
	this.aIndices = aFiltered;
	this.iLength = aFiltered.length;
};

/**
 * Resolve the client list binding and check if an index matches
 *
 * @private
 */
sap.ui.model.ClientListBinding.prototype._resolveMultiFilter = function(oMultiFilter, iIndex){
	var that = this,
		bMatched = false,
		aFilters = oMultiFilter.aFilters;
	
	if (aFilters) {
		jQuery.each(aFilters, function(i, oFilter) {
			var bLocalMatch = false;
			if (oFilter._bMultiFilter) {
				bLocalMatch = that._resolveMultiFilter(oFilter, iIndex)
			} else if (oFilter.sPath) {
				var oValue = that.oModel.getProperty(oFilter.sPath, that.oList[iIndex]);
				if (typeof oValue == "string") {
					oValue = oValue.toUpperCase();
				}
				var fnTest = that.getFilterFunction(oFilter);
				if (oValue != undefined && fnTest(oValue)) {
					bLocalMatch = true;
				}
			}
			if (bLocalMatch && oMultiFilter.bAnd) {
				bMatched = true;
			} else if (!bLocalMatch && oMultiFilter.bAnd) {
				bMatched = false;
				return false;
			} else if (bLocalMatch) {
				bMatched = true;
				return false;
			}
		});
	}
	
	return bMatched;
};

/**
 * Provides a JS filter function for the given filter
 */
sap.ui.model.ClientListBinding.prototype.getFilterFunction = function(oFilter){
	if (oFilter.fnTest) {
		return oFilter.fnTest;
	}
	var oValue1 = oFilter.oValue1,
		oValue2 = oFilter.oValue2;
	if (typeof oValue1 == "string") {
		oValue1 = oValue1.toUpperCase();
	}
	if (typeof oValue2 == "string") {
		oValue2 = oValue2.toUpperCase();
	}
	switch (oFilter.sOperator) {
		case "EQ":
			oFilter.fnTest = function(value) { return value == oValue1; }; break;
		case "NE":
			oFilter.fnTest = function(value) { return value != oValue1; }; break;
		case "LT":
			oFilter.fnTest = function(value) { return value < oValue1; }; break;
		case "LE":
			oFilter.fnTest = function(value) { return value <= oValue1; }; break;
		case "GT":
			oFilter.fnTest = function(value) { return value > oValue1; }; break;
		case "GE":
			oFilter.fnTest = function(value) { return value >= oValue1; }; break;
		case "BT":
			oFilter.fnTest = function(value) { return (value >= oValue1) && (value <= oValue2); }; break;
		case "Contains":
			oFilter.fnTest = function(value) {
				if (typeof value != "string") {
					throw new Error("Only \"String\" values are supported for the FilterOperator: \"Contains\".");
				}
				return value.indexOf(oValue1) != -1; 
			}; 
			break;
		case "StartsWith":
			oFilter.fnTest = function(value) { 
				if (typeof value != "string") {
					throw new Error("Only \"String\" values are supported for the FilterOperator: \"StartsWith\".");
				}
				return value.indexOf(oValue1) == 0; 
			}; 
			break;
		case "EndsWith":
			oFilter.fnTest = function(value) { 
				if (typeof value != "string") {
					throw new Error("Only \"String\" values are supported for the FilterOperator: \"EndsWith\".");
				}
				var iPos = value.indexOf(oValue1);
				if (iPos == -1){
					return false;					
				}
				return iPos == value.length - new String(oFilter.oValue1).length; 
			}; 
			break;
		default:
			oFilter.fnTest = function(value) { return true; };
	}
	return oFilter.fnTest;
};

/**
 * Get distinct values
 *
 * @param {String} sPath
 *
 * @protected
 */
sap.ui.model.ClientListBinding.prototype.getDistinctValues = function(sPath){
	var aResult = [],
		oMap = {},
		sValue,
		that = this;
	jQuery.each(this.oList, function(i, oContext) {
		sValue = that.oModel.getProperty(sPath, oContext);
		if (!oMap[sValue]) {
			oMap[sValue] = true;
			aResult.push(sValue);
		}
	});
	return aResult;
};
