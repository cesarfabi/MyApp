/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionSheetRenderer");

/**
 * @class ActionSheet renderer. 
 * @static
 */
sap.m.ActionSheetRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.ActionSheetRenderer.render = function(oRm, oControl){ 
	var aActionButtons = oControl.getButtons(), i, bMixedButtons;
	
	for(i = 0 ; i < aActionButtons.length ; i++){
		if(aActionButtons[i].getIcon()){
			bMixedButtons = true;
			break;
		}
	}
	
	// write the HTML into the render manager
	oRm.write("<div");
	oRm.writeControlData(oControl);
	oRm.addClass("sapMActionSheet");
	if(bMixedButtons){
		oRm.addClass("sapMActionSheetMixedButtons");
	}
	oRm.writeClasses();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}
	
	oRm.write(">");
	
	for(i = 0 ; i < aActionButtons.length ; i++){
		oRm.renderControl(aActionButtons[i].addStyleClass("sapMActionSheetButton"));
	}
	 
	if((jQuery.device.is.iphone || (sap.m.Dialog._bOneDesign && jQuery.device.is.phone)) && oControl.getShowCancelButton()){
		oRm.renderControl(oControl._getCancelButton());
	}
	
	oRm.write("</div>");
};
