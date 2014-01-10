/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListBaseRenderer");
jQuery.sap.declare("sap.m.TableRenderer");

/**
 * @class List renderer.
 * @static
 *
 * TableRenderer extends the ListBaseRenderer
 */
sap.m.TableRenderer = sap.ui.core.Renderer.extend(sap.m.ListBaseRenderer);


/**
 * Renders the Header and/or Footer of the Table like List Control
 *
 * @param {sap.ui.core.RenderManager} rm RenderManager
 * @param {sap.m.ListBase} oTable Table control
 * @param {String} type Whether "Head" or "Foot"
 */
sap.m.TableRenderer.renderColumns = function(rm, oTable, type) {
	var index = 0,
		hiddens = 0,
		hasPopin = false,
		hasFooter = false,
		mode = oTable.getMode(),
		clsPrefix = "sapMListTbl",
		idPrefix = oTable.getId() + "-tbl",
		cellTag = (type == "Head") ? "th" : "td",
		groupTag = "t" + type.toLowerCase(),
		aColumns = oTable.getColumns(),
		isHeaderHidden = (type == "Head") && aColumns.every(function(oColumn) {
			return	!oColumn.getHeader() ||
					!oColumn.getVisible() ||
					oColumn.isPopin() ||
					oColumn.isNeverVisible() ||
					oColumn.isHidden();
		}),
		hasOneHeader = (type == "Head") && aColumns.filter(function(oColumn) {
			return	oColumn.getVisible() &&
					!oColumn.isPopin() &&
					!oColumn.isNeverVisible() &&
					!oColumn.isHidden();
		}).length == 1,
		isDeleteOnRight = (sap.ui.core.theming.Parameters.get("sapMPlatformDependent") != "true" && mode == "Delete"),
		createBlankCell = function(cls, id) {
			rm.write("<");
			rm.write(cellTag);
			id && rm.writeAttribute("id", idPrefix + id);
			cls == "SelCol" && rm.writeAttribute("tabindex", "-1");
			rm.addClass(clsPrefix + cls);
			rm.writeClasses();
			rm.write("></");
			rm.write(cellTag);
			rm.write(">");
			index++;
		};

	rm.write("<" + groupTag + ">");
	rm.write("<tr");

	if (isHeaderHidden) {
		rm.addClass("sapMListTblHeaderNone");
	} else {
		rm.addClass("sapMListTblRow sapMListTbl" + type + "er");
	}

	rm.writeClasses();
	rm.write(">");

	if (mode != "None" && mode != "SingleSelect" && !isDeleteOnRight) {
		if (mode == "SingleSelectMaster") {
			createBlankCell("None");
			hiddens++;
		} else if (mode == "MultiSelect" && type == "Head" && !isHeaderHidden) {
			rm.write("<th class='" + clsPrefix + "SelCol'><div class='sapMLIBSelectM'>");
			rm.renderControl(oTable._getSelectAllCheckbox());
			rm.write("</div></th>");
			index++;
		} else {
			createBlankCell("SelCol");
		}
	}

	if (sap.ui.core.theming.Parameters.get("sapUiLIUnreadAsBubble") == "true" && oTable.getShowUnread()) {
		createBlankCell("UnreadCol");
	}

	aColumns.forEach(function(oColumn, order) {
		oColumn.setIndex(-1);
		oColumn.setInitialOrder(order);
	});

	oTable.getColumns(true).forEach(function(oColumn, order) {
		if (!oColumn.getVisible()) {
			return;
		}
		if (oColumn.isPopin()) {
			hasPopin = true;
			return;
		}
		if (oColumn.isNeverVisible()) {
			return;
		}
		if (oColumn.isHidden()) {
			hiddens++;
		}

		var control = oColumn["get" + type + "er"](),
			width = hasOneHeader ? "" : oColumn.getWidth(),
			cls = oColumn.getStyleClass(true);

		rm.write("<" + cellTag);
		cls && rm.addClass(cls);
		rm.addClass(clsPrefix + "Cell");
		rm.writeAttribute("tabindex", "-1");
		rm.writeAttribute("id", idPrefix + type + index);
		rm.writeAttribute("data-sap-orig-width", oColumn.getWidth());
		width && rm.addStyle("width", width);
		rm.addStyle("text-align", oColumn.getCssAlign());
		rm.writeClasses();
		rm.writeStyles();
		rm.write(">");
		if (control) {
			oColumn.applyAlignTo(control);
			rm.renderControl(control);
			if (type == "Head" && !hasFooter) {
				hasFooter = !!oColumn.getFooter();
			}
		}
		rm.write("</" + cellTag + ">");
		oColumn.setIndex(index++);
	});

	createBlankCell("NavCol", type + "Nav");

	if (mode == "SingleSelect" || isDeleteOnRight) {
		createBlankCell("SelCol");
	}

	rm.write("</tr></" + groupTag + ">");

	if (type == "Head") {
		oTable._hasPopin = hasPopin;
		oTable._colCount = index - hiddens;
		oTable._hasFooter = hasFooter;
	}
};


/**
 * add table container class name
 */
sap.m.TableRenderer.renderContainerAttributes = function(rm, oControl) {
	oControl._bRendering = true;
	rm.addClass("sapMListTblCnt");
};

/**
 * render table tag and add required classes
 */
sap.m.TableRenderer.renderListStartAttributes = function(rm, oControl) {
	rm.write("<table");
	rm.addClass("sapMListTbl");
};

/**
 * generate table columns
 */
sap.m.TableRenderer.renderListHeadAttributes = function(rm, oControl) {
	this.renderColumns(rm, oControl, "Head");
	rm.write("<tbody>");	// items will be rendered after head
};

/**
 * render footer and finish rendering table
 */
sap.m.TableRenderer.renderListEndAttributes = function(rm, oControl) {
	rm.write("</tbody>");	// items should be rendered before foot
	oControl._hasFooter && this.renderColumns(rm, oControl, "Foot");
	oControl._bRendering = false;
	rm.write("</table>");
};

/**
 * render no data
 */
sap.m.TableRenderer.renderNoData = function(rm, oControl) {
	rm.write("<tr id='" + oControl.getId() + "-listNoData' class='sapMLIB sapMListTblRow sapMLIBShowSeparator'>");
	rm.write("<td colspan='" + oControl.getColCount() + "' class='sapMListTblCell sapMListTblCellNoData'>");
	rm.writeEscaped(oControl.getNoDataText());
	rm.write("</td></tr>");
};

/**
 * if there is no visible column then we do not need to render items
 */
sap.m.TableRenderer.shouldRenderItems = function(oControl) {
	return oControl.getColumns().some(function(oColumn) {
		return oColumn.getVisible();
	});
};