/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.InputBaseRenderer");
jQuery.sap.declare("sap.m.InputRenderer");

/**
 * @class Input renderer.
 * @static
 *
 * InputRenderer extends the InputBaseRenderer
 */
sap.m.InputRenderer = sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);

/**
 * Adds control specific class
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addOuterClasses = function(oRm, oControl) {
	oRm.addClass("sapMInput");
};

/**
 * Add extra styles for input container
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addOuterStyles = function(oRm, oControl) {
	if (!oControl.getWidth()) {
		oRm.addStyle("width", "100%");
	}
};

/**
 * add extra attributes to Input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.writeInnerAttributes = function(oRm, oControl) {
	oRm.writeAttribute("type", oControl.getType().toLowerCase()); 
	if ((!oControl.getEnabled() && oControl.getType() == "Password") 
			|| (oControl.getShowSuggestion() && sap.ui.Device.system.phone)){
		// required for JAWS reader on password fields on desktop:
		oRm.writeAttribute("readonly", "readonly");
	}
};

/**
 * Adds inner css classes to the input field
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.addInnerClasses = function(oRm, oControl) {
	if(oControl.getShowValueHelp() && oControl.getEnabled()) {
		oRm.addClass("sapMInputInnerVH");
	}
};

/**
 * add extra content to Input
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.InputRenderer.writeInnerContent = function(oRm, oControl) {
	 if(oControl.getShowValueHelp() && oControl.getEnabled()) {
		oRm.write('<div class="sapMInputValHelp">');
		oRm.renderControl(oControl._getValueHelpIcon());
		oRm.write("</div>");
	 }

};