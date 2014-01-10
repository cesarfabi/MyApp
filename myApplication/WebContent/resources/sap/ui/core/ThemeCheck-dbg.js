/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.core.ThemeCheck
jQuery.sap.declare("sap.ui.core.ThemeCheck");

jQuery.sap.require("sap.ui.base.Object");
jQuery.sap.require("jquery.sap.script");

(function() {

sap.ui._maxThemeCheckCycles = 100;

/**
 * Creates a new ThemeCheck object.
 *
 * @class Helper class used by the UI5 Core to check whether the themes are applied correctly.
 *
 * It could happen that e.g. in onAfterRendering not all themes are available. In these cases the
 * check waits until the CSS is applied and fires an onThemeChanged event.
 *
 * @extends sap.ui.base.Object
 * @since 1.10.0
 * @author SAP AG
 * @constructor
 * @private
 * @name sap.ui.core.ThemeCheck
 */
sap.ui.base.Object.extend("sap.ui.core.ThemeCheck", /** @lends sap.ui.core.ThemeCheck.prototype */ {

	constructor : function(oCore) {
		this._oCore = oCore;
		this._iCount = 0; // Prevent endless loop
		this._CUSTOMCSSCHECK = ".sapUiThemeDesignerCustomCss";
		this._CUSTOMID = "sap-ui-core-customcss";
		this._customCSSAdded = false;
		this._themeCheckedForCustom = null;
	},

	getInterface : function() {
		return this;
	},

	fireThemeChangedEvent : function(bOnlyOnInitFail, bForceCheck) {
		clear(this);
		var bUseThemeCheck = sap.ui._maxThemeCheckCycles > 0; //Possibility to switch off theme check (except of force mode (for Core.applyTheme))

		if(bUseThemeCheck || bForceCheck){
			delayedCheckTheme.apply(this, [true]);
		}else{
			sap.ui.core.ThemeCheck.themeLoaded = true;
		}

		if(!bOnlyOnInitFail && !this._sThemeCheckId){
			this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
		}

	}

});

sap.ui.core.ThemeCheck.themeLoaded = false;

sap.ui.core.ThemeCheck.checkStyle = function(oStyle, bLog){
	if(typeof(oStyle) === "string"){
		oStyle = jQuery.sap.domById(oStyle);
	}
	var $Style = jQuery(oStyle);

	try {
		var res = !oStyle || !!((oStyle.sheet && oStyle.sheet.cssRules.length > 0) ||
        		!!(oStyle.styleSheet && oStyle.styleSheet.cssText.length > 0) ||
        		!!(oStyle.innerHTML && oStyle.innerHTML.length > 0));
		var res2 = $Style.attr("sap-ui-ready");
		res2 = !!(res2 === "true" || res2 === "false");
		if(bLog){
			jQuery.sap.log.debug("ThemeCheck: Check styles '"+$Style.attr("id")+"': "+res+"/"+res2+"/"+!!oStyle);
		}
		return res || res2;
	}catch(e){}

	if(bLog){
		jQuery.sap.log.debug("ThemeCheck: Error during check styles '"+$Style.attr("id")+"': false/false/"+!!oStyle);
	}
	return false;
};

function clear(oThemeCheck){
	sap.ui.core.ThemeCheck.themeLoaded = false;
	if(oThemeCheck._sThemeCheckId){
		jQuery.sap.clearDelayedCall(oThemeCheck._sThemeCheckId);
		oThemeCheck._sThemeCheckId = null;
		oThemeCheck._iCount = 0;
	}
}

function checkTheme(oThemeCheck) {
	var mLibs = oThemeCheck._oCore.getLoadedLibraries();
	var sThemeName = oThemeCheck._oCore.getConfiguration().getTheme();
	var sPath = oThemeCheck._oCore._getThemePath("sap.ui.core", sThemeName) + "custom.css";
	var res = true;

	if (!!oThemeCheck._customCSSAdded && oThemeCheck._themeCheckedForCustom === sThemeName){
		// include custom style sheet here because it has already been added using jQuery.sap.includeStyleSheet
		// hence, needs to be checked for successful inclusion, too
		mLibs["sap-ui-theme-"+oThemeCheck._CUSTOMID] = {};
	}

	jQuery.each(mLibs, function(lib) {
		res = res && sap.ui.core.ThemeCheck.checkStyle("sap-ui-theme-"+lib, true);
		if (lib === "sap.ui.core" && res){
			/* as soon as core css has been loaded, look if there is a flag for custom css inclusion inside, but only
			 * if this has not been checked before for the same theme
			 */
			if(oThemeCheck._themeCheckedForCustom != sThemeName){
				oThemeCheck._themeCheckedForCustom = sThemeName;
				if (checkCustom(oThemeCheck)){
						//load custom css available at sap/ui/core/themename/library.css
					jQuery.sap.includeStyleSheet(sPath,  oThemeCheck._CUSTOMID);
					oThemeCheck._customCSSAdded = true;
					jQuery.sap.log.warning("ThemeCheck delivered custom CSS needs to be loaded, Theme not yet applied");
					res = false;
					return false;
				}
				else{
					// remove stylesheet once the particular class is not available (e.g. after theme switch)
					/*check for custom theme was not successful, so we need to make sure there are no custom style sheets attached*/
					var customCssLink = jQuery("LINK[id='"+  oThemeCheck._CUSTOMID + "']");
					if (customCssLink.length > 0){
						customCssLink.remove();
						jQuery.sap.log.debug("Custom CSS removed");
					}
					oThemeCheck._customCSSAdded = false;
				}
			}
		}
	});
	if(!res){
		jQuery.sap.log.warning("ThemeCheck: Theme not yet applied.");
	}
	return res;
}

/* checks if a particular class is available at the beginning of the core styles
 */
function checkCustom (oThemeCheck){
	var ruleName = null;
	//get the core styles
	jQuery.each(document.styleSheets, function(iIndex, oStyleSheet) {
			if (!!oStyleSheet.ownerNode && /sap.ui.core/.test(oStyleSheet.ownerNode.id) && oStyleSheet.cssRules && oStyleSheet.cssRules.length > 0){
				ruleName = oStyleSheet.cssRules[0].selectorText;
			}
			else if(!!oStyleSheet.owningElement && /sap.ui.core/.test(oStyleSheet.owningElement.id) && oStyleSheet.rules && oStyleSheet.rules.length > 0){
					//ie8 doesn't know ownerNode
				ruleName = oStyleSheet.rules[0].selectorText;
			}
	});
	// we should now have some rule name ==> try to match against custom check
	if(ruleName === oThemeCheck._CUSTOMCSSCHECK){
		return true;
	}
	return false;
}

function delayedCheckTheme(bFirst) {
	this._iCount++;

	var bEmergencyExit = this._iCount > sap.ui._maxThemeCheckCycles;

	if(!checkTheme(this) && !bEmergencyExit){
		this._sThemeCheckId = jQuery.sap.delayedCall(2, this, delayedCheckTheme);
	}else if(!bFirst){
		clear(this);
		sap.ui.core.ThemeCheck.themeLoaded = true;
		this._oCore.fireThemeChanged({theme: this._oCore.getConfiguration().getTheme()});
		if(bEmergencyExit){
			jQuery.sap.log.warning("ThemeCheck: max. check cycles reached.");
		}
	}else{
		sap.ui.core.ThemeCheck.themeLoaded = true;
	}
}

})();