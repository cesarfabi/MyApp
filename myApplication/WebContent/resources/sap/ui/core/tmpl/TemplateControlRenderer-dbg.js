/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// A renderer for the ScrollBar control
jQuery.sap.declare("sap.ui.core.tmpl.TemplateControlRenderer");

/**
 * @class Control renderer.
 * @static
 */
sap.ui.core.tmpl.TemplateControlRenderer = {};

/**
 * Renders the Template for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            oRM RenderManager that can be used for writing to the
 *            Render-Output-Buffer
 * @param {sap.ui.core.tmpl.TemplateControl}
 *            oControl Object representation of the template control 
 *            that should be rendered
 */
sap.ui.core.tmpl.TemplateControlRenderer.render = function(oRM, oControl) {
	
	// render the control
	/*
	var rHTML = /([^<]*)<(\w+)([^>]*)>/i.exec(sHTML);
	if (rHTML) {
		// append the control data
		// TODO: addStyleClass and attributes support!
		oRM.write(rHTML[1]);
		oRM.write("<");
		oRM.write(rHTML[2]);
		oRM.writeControlData(oControl);
		oRM.write(rHTML[3]);
		oRM.write(">");
		oRM.write(sHTML.substring(rHTML[0].length));
	} else {
		// TODO: is this really valid or should we put a root tag around
		// to write the control data!
		oRM.write(sHTML);
	}
	*/

	// check the control being inlined
	var bInline = oControl.isInline();
	
	// we need to make sure to have a common root tag (therefore we add a DIV)
	// if we have no common root tag, the re-rendering would not clean up
	// the old markup properly.
	//   -> the approach above enhance the root tag from the template
	if (!bInline) {
		oRM.write("<div");
		oRM.writeControlData(oControl);
		oRM.writeStyles();
		oRM.writeClasses();
		oRM.write(">");
	}
	
	// in case of declaring a control the renderTemplate function is part of the
	// specific renderer implementation - in case of anonymous template controls
	// the renderer is defined at the control instance
	var fnRenderer = this.renderTemplate || oControl.getTemplateRenderer();
	if (fnRenderer) {
		fnRenderer.apply(this, arguments);
	}
	
	if (!bInline) {
		oRM.write("</div>");
	}
	
};
