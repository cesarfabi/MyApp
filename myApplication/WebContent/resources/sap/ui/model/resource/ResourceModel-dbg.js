/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/**
 * ResourceBundle-based DataBinding
 *
 * @namespace
 * @name sap.ui.model.resource
 * @public
 */

// Provides the resource bundle based model implementation
jQuery.sap.declare("sap.ui.model.resource.ResourceModel");
jQuery.sap.require("sap.ui.model.Model");
jQuery.sap.require("sap.ui.model.resource.ResourcePropertyBinding");

/**
 * Constructor for a new ResourceModel.
 *
 * @class Model implementation for resource bundles
 *
 * @extends sap.ui.model.Model
 *
 * @author SAP AG
 * @version 1.16.3
 *
 * @param {object} oData parameters used to initialize the ResourceModel; at least either bundleUrl or bundleName must be set on this object; if both are set, bundleName wins
 * @param {string} [oData.bundleUrl] the URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
 * @param {string} [oData.bundleName] the UI5 module name of the .properties file; this name will be resolved to a path like the paths of normal UI5 modules and ".properties" will then be appended (e.g. a name like "myBundle" can be given)
 * @param {string} [oData.bundleLocale] an optional locale; when not given, the default is the active locale from the UI5 configuration
 * @constructor
 * @public
 * @name sap.ui.model.resource.ResourceModel
 */
sap.ui.model.Model.extend("sap.ui.model.resource.ResourceModel", /** @lends sap.ui.model.resource.ResourceModel */ {

	constructor : function(oData) {
		sap.ui.model.Model.apply(this, arguments);
	
		this.sDefaultBindingMode = sap.ui.model.BindingMode.OneTime;
		this.mSupportedBindingModes = {
			"OneWay" : false,
			"TwoWay" : false,
			"OneTime" : true
		};

		this.oData = oData;
		// load resource bundle
		if (oData && (oData.bundleUrl || oData.bundleName)) {
			this.ResourceBundle = this.loadResourceBundle(oData);
		} else {
			throw new Error("Neither bundleUrl nor bundleName are given. One of these is mandatory.");
		}
	},

	metadata : {
		publicMethods : [ "getResourceBundle" ]
	}

});

/**
 * Creates a new subclass of class sap.ui.model.resource.ResourceModel with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
 * see {@link sap.ui.base.Object.extend Object.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.model.resource.ResourceModel.extend
 * @function
 */

/**
 * Returns the resource bundle
 *
 * @param {object} oData
 * @return loaded resource bundle
 * @private
 */
sap.ui.model.resource.ResourceModel.prototype.loadResourceBundle = function(oData) {
	var oConfiguration = sap.ui.getCore().getConfiguration(),
		oRb, sUrl, sLocale, bIncludeInfo;
	sLocale = oData.bundleLocale;
	if (!sLocale) {
		sLocale = oConfiguration.getLanguage();
	}
	bIncludeInfo = oConfiguration.getOriginInfo();
	sUrl = oData.bundleUrl;
	if(oData.bundleName) {
		sUrl = jQuery.sap.getModulePath(oData.bundleName, '.properties');
	}
    oRb = jQuery.sap.resources({url: sUrl, locale: sLocale, includeInfo: bIncludeInfo});
    return oRb;
};

/**
 * Enhances the resource model with a custom resource bundle. The resource model
 * can be enhanced with multiple resource bundles. The last enhanced resource
 * bundle wins against the previous ones and the original ones. This function
 * can be called several times.
 *
 * @param {object} oData parameters used to initialize the ResourceModel; at least either bundleUrl or bundleName must be set on this object; if both are set, bundleName wins
 * @param {string} [oData.bundleUrl] the URL to the base .properties file of a bundle (.properties file without any locale information, e.g. "mybundle.properties")
 * @param {string} [oData.bundleName] the UI5 module name of the .properties file; this name will be resolved to a path like the paths of normal UI5 modules and ".properties" will then be appended (e.g. a name like "myBundle" can be given)
 * @param {string} [oData.bundleLocale] an optional locale; when not given, the default is the active locale from the UI5 configuration
 * @since 1.16.1
 * @protected
 */
sap.ui.model.resource.ResourceModel.prototype.enhance = function(oData) {
	var oCustomResourceBundle = this.loadResourceBundle(oData);
	if (oCustomResourceBundle) {
		this._aCustomResourceBundles = this._aCustomResourceBundles || [];
		this._aCustomResourceBundles.push(oCustomResourceBundle);
	}
};

/**
 * @see sap.ui.model.Model.prototype.bindProperty
 *
 */
sap.ui.model.resource.ResourceModel.prototype.bindProperty = function(sPath) {
	var oBinding = new sap.ui.model.resource.ResourcePropertyBinding(this, sPath);
	return oBinding;
};

/**
 * Returns the value for the property with the given <code>sPropertyName</code>
 *
 * @param {string} sPath the path to the property
 * @type any
 * @return the value of the property
 * @public
 */
sap.ui.model.resource.ResourceModel.prototype.getProperty = function(sPath) {
	var sText;
	// lookup the custom resource bundles (last one first!)
	if (this._aCustomResourceBundles) {
		for (var i = this._aCustomResourceBundles.length - 1; i >= 0; i--) {
			sText = this._aCustomResourceBundles[i].getText(sPath);
			// make sure that not the key is returned!
			if (sText && sText.toString() !== sPath) {
				break;
			} else {
				sText = undefined;
			}
		}
	}
	// lookup the current resource bundle
	if (!sText) {
		sText = this.ResourceBundle.getText(sPath);
	}
	return sText;
};

/**
 * Returns the resource bundle of this model
 *
 * @return loaded resource bundle
 * @public
 */
sap.ui.model.resource.ResourceModel.prototype.getResourceBundle = function() {
	return this.ResourceBundle;
};

sap.ui.model.resource.ResourceModel.prototype._handleLocalizationChange = function() {
	if (this.oData && (this.oData.bundleUrl || this.oData.bundleName)) {
		this.ResourceBundle = this.loadResourceBundle(this.oData);
	}
}
