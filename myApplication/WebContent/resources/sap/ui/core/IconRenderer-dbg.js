/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.IconRenderer");

/**
 * @class FontIcon renderer. 
 * @static
 */
sap.ui.core.IconRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.core.IconRenderer.render = function(oRm, oControl){ 

	// An invisible icon is not rendered
	if (!oControl.getVisible()) {
		return;
	}
	
	// write the HTML into the render manager
	var oIconInfo = sap.ui.core.IconPool.getIconInfo(oControl.getSrc()),
		sWidth = oControl.getWidth(),
		sHeight = oControl.getHeight(),
		sColor = oControl.getColor(),
		sBackgroundColor = oControl.getBackgroundColor(),
		sSize = oControl.getSize(),
		tooltip = oControl.getTooltip_AsString(),
		//in IE8 :before is not supported, text needs to be rendered in span
		bTextNeeded = (!!sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 9);
	oRm.write("<span");
	oRm.writeControlData(oControl);
	
	if (tooltip) {
		oRm.writeAttributeEscaped("title", tooltip);
	}
	if(oIconInfo){
		if(!bTextNeeded){
			oRm.writeAttribute("data-sap-ui-icon-content", oIconInfo.content);
		}
		oRm.addStyle("font-family", "'" + oIconInfo.fontFamily + "'");
	}
	if(sWidth){
		oRm.addStyle("width", sWidth);
	}
	if(sHeight){
		oRm.addStyle("height", sHeight);
		oRm.addStyle("line-height", sHeight);
	}
	if(sColor){
		oRm.addStyle("color", sColor);
	}
	if(sBackgroundColor){
		oRm.addStyle("background-color", sBackgroundColor);
	}
	if(sSize){
		oRm.addStyle("font-size", sSize);
	}
	oRm.writeStyles();
	
	oRm.addClass("sapUiIcon");
	if(oIconInfo && !oIconInfo.skipMirroring){
		oRm.addClass("sapUiIconMirrorInRTL");
	}
	
	if(oControl.hasListeners("press") || oControl.hasListeners("tap")){
		//show pointer cursor if icon is active i.e. press or tap is set
		oRm.addClass("sapMPointer");
	}
	
	oRm.writeClasses();
	
	oRm.write(">"); // span element
	if(oIconInfo && bTextNeeded){
		oRm.write(oIconInfo.content);
	}
	oRm.write("</span>");
};
