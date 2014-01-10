/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.ActionSelect.
jQuery.sap.declare("sap.m.ActionSelect");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.Select");


/**
 * Constructor for a new ActionSelect.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getButtons buttons} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Select#constructor sap.m.Select}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The action select control provides a list of predefined items that allows end users to choose options and additionaly trigger some actions.
 * @extends sap.m.Select
 *
 * @author SAP AG 
 * @version 1.16.3
 *
 * @constructor   
 * @public
 * @since 1.16
 * @name sap.m.ActionSelect
 */
sap.m.Select.extend("sap.m.ActionSelect", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	associations : {
		"buttons" : {type : "sap.m.Button", multiple : true, singularName : "button"}
	}
}});


/**
 * Creates a new subclass of class sap.m.ActionSelect with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.ActionSelect.extend
 * @function
 */


/**
 * Buttons to be added to the ActionSelect content.
 * 
 * @return {string[]}
 * @public
 * @name sap.m.ActionSelect#getButtons
 * @function
 */

	
/**
 *
 * @param {string | sap.m.Button} vButton
 *    Id of a button which becomes an additional target of this <code>buttons</code> association.
 *    Alternatively, a button instance may be given. 
 * @return {sap.m.ActionSelect} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.ActionSelect#addButton
 * @function
 */

/**
 * @param {int | string | sap.m.Button} vButton the button to remove or its index or id
 * @return {string} the id of the removed button or null
 * @public
 * @name sap.m.ActionSelect#removeButton
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.m.ActionSelect#removeAllButtons
 * @function
 */

	
// Start of sap/m/ActionSelect.js
/* =========================================================== */
/*             begin: internal methods and properties          */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* private methods                                             */
/* ----------------------------------------------------------- */

/**
 * Determines whether the ActionSelect has content or not.
 *
 * @return {boolean}
 * @override
 * @private
 */
sap.m.ActionSelect.prototype.hasContent = function() {
	return sap.m.Select.prototype.hasContent.call(this) || !!this.getButtons().length;
};

/**
 * Add additional content.
 *
 * @param {sap.m.Dialog | sap.m.Popover} [oPopup]
 * @override
 * @private
 * @name sap.m.ActionSelect#addContent
 */
sap.m.ActionSelect.prototype.addContent = function(oPopup) {
	var oCore = sap.ui.getCore(),
		oPopup = oPopup || this.getPopup()

	this.getButtons().forEach(function(sButtonId) {
		oPopup.addContent(oCore.byId(sButtonId));
	});
};

/* ========================================================== */
/*              end: internal methods and properties          */
/* ========================================================== */


/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */

/**
 * Called after the ActionSelect pop-up is render.
 *
 * @override
 * @protected
 * @name sap.m.ActionSelect#onAfterRenderingPopup
 */
sap.m.ActionSelect.prototype.onAfterRenderingPopup = function() {
	sap.m.Select.prototype.onAfterRenderingPopup.call(this);

	this.getPopup().addStyleClass(sap.m.ActionSelectRenderer.CSS_CLASS + "Popup");
};

/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */