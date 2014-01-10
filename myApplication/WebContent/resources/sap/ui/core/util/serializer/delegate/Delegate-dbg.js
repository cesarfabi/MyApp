/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.declare("sap.ui.core.util.serializer.delegate.Delegate");

jQuery.sap.require("sap.ui.base.EventProvider");

/**
 * Abstract serializer delegate class. All delegates must extend from this class and implement the abstract methods.
 *
 * @public
 * @abstract
 * @class Abstract serializer delegate class.
 * @extends sap.ui.base.EventProvider
 * @author SAP
 * @version 1.16.3
 * @name sap.ui.core.util.serializer.delegate.Delegate
 * @experimental Since 1.15.1. The abstract serializer delegate is still under construction, so some implementation details can be changed in future.
 */
sap.ui.base.EventProvider.extend("sap.ui.core.util.serializer.delegate.Delegate", /** @lends sap.ui.core.util.serializer.delegate.Delegate */
{
	constructor : function () {
		sap.ui.base.EventProvider.apply(this);
	}
});


/**
 * Delegate method "start".
 * 
 * @abstract
 * @param {sap.ui.core.Control} oControl The current control to process.
 * @param {string} sAggregationName The current aggregation name.
 * @param {boolean} isDefaultAggregation Whether the aggregation is the default aggregation.
 * @return {string} the created string.
 */
sap.ui.core.util.serializer.delegate.Delegate.prototype.start = function (oControl, sAggregationName, isDefaultAggregation) {
	return "";
};


/**
 * Delegate method "middle".
 * 
 * @abstract
 * @param {sap.ui.core.Control} oControl The current control to process.
 * @param {string} sAggregationName The current aggregation name.
 * @param {boolean} isDefaultAggregation Whether the aggregation is the default aggregation.
 * @return {string} the created string.
 */
sap.ui.core.util.serializer.delegate.Delegate.prototype.middle = function (oControl, sAggregationName, isDefaultAggregation) {
	return "";
};


/**
 * Delegate method "end".
 * 
 * @abstract
 * @param {sap.ui.core.Control} oControl The current control to process.
 * @param {string} sAggregationName The current aggregation name.
 * @param {boolean} isDefaultAggregation Whether the aggregation is the default aggregation.
 * @return {string} the created string.
 */
sap.ui.core.util.serializer.delegate.Delegate.prototype.end = function (oControl, sAggregationName, isDefaultAggregation) {
	return "";
};


/**
 * Delegate method "startAggregation".
 * 
 * @abstract
 * @param {sap.ui.core.Control} oControl The current control to process.
 * @param {string} sAggregationName The current aggregation name.
 * @return {string} the created string.
 */
sap.ui.core.util.serializer.delegate.Delegate.prototype.startAggregation = function (oControl, sAggregationName) {
	return "";
};


/**
 * Delegate method "endAggregation".
 * 
 * @abstract
 * @param {sap.ui.core.Control} oControl The current control to process.
 * @param {string} sAggregationName The current aggregation name.
 * @return {string} the created string.
 */
sap.ui.core.util.serializer.delegate.Delegate.prototype.endAggregation = function (oControl, sAggregationName) {
	return "";
};