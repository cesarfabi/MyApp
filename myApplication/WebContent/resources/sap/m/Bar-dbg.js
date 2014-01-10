/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Bar.
jQuery.sap.declare("sap.m.Bar");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Bar.
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
 * <ul>
 * <li>{@link #getEnableFlexBox enableFlexBox} : boolean (default: false)</li>
 * <li>{@link #getTranslucent translucent} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentLeft contentLeft} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentMiddle contentMiddle} : sap.ui.core.Control[]</li>
 * <li>{@link #getContentRight contentRight} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A bar that is usually used on top of pages
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.3
 *
 * @constructor   
 * @public
 * @name sap.m.Bar
 */
sap.ui.core.Control.extend("sap.m.Bar", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"enableFlexBox" : {type : "boolean", group : "Misc", defaultValue : false, deprecated: true},
		"translucent" : {type : "boolean", group : "Appearance", defaultValue : false}
	},
	aggregations : {
    	"contentLeft" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentLeft"}, 
    	"contentMiddle" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentMiddle"}, 
    	"contentRight" : {type : "sap.ui.core.Control", multiple : true, singularName : "contentRight"}
	}
}});


/**
 * Creates a new subclass of class sap.m.Bar with name <code>sClassName</code> 
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
 * @name sap.m.Bar.extend
 * @function
 */


/**
 * Getter for property <code>enableFlexBox</code>.
 * If this flag is set to true, ContentMiddle will be rendered as a HBox and layoutData can be used to allocate available space
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableFlexBox</code>
 * @public
 * @deprecated Since version 1.16. 
 * 
 * This property is no longer supported, instead, ContentMiddle will always occupy 100% width when no ContentLeft and ContentRight are being set.
 * @name sap.m.Bar#getEnableFlexBox
 * @function
 */

/**
 * Setter for property <code>enableFlexBox</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableFlexBox  new value for property <code>enableFlexBox</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.16. 
 * 
 * This property is no longer supported, instead, ContentMiddle will always occupy 100% width when no ContentLeft and ContentRight are being set.
 * @name sap.m.Bar#setEnableFlexBox
 * @function
 */


/**
 * Getter for property <code>translucent</code>.
 * A boolean value indicating whether the bar is partially translucent.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>translucent</code>
 * @public
 * @since 1.12
 * @name sap.m.Bar#getTranslucent
 * @function
 */

/**
 * Setter for property <code>translucent</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bTranslucent  new value for property <code>translucent</code>
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @name sap.m.Bar#setTranslucent
 * @function
 */


/**
 * Getter for aggregation <code>contentLeft</code>.<br/>
 * this is the left content area, usually containing button or App Icon
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentLeft
 * @function
 */


/**
 * Inserts a contentLeft into the aggregation named <code>contentLeft</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentLeft the contentLeft to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentLeft should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentLeft is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentLeft is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentLeft
 * @function
 */

/**
 * Adds some contentLeft <code>oContentLeft</code> 
 * to the aggregation named <code>contentLeft</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentLeft
 * @function
 */

/**
 * Removes an contentLeft from the aggregation named <code>contentLeft</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentLeft the contentLeft to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentLeft or null
 * @public
 * @name sap.m.Bar#removeContentLeft
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentLeft</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentLeft
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentLeft</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentLeft the contentLeft whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentLeft
 * @function
 */
	

/**
 * Destroys all the contentLeft in the aggregation 
 * named <code>contentLeft</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentLeft
 * @function
 */


/**
 * Getter for aggregation <code>contentMiddle</code>.<br/>
 * This is the middle content area. Controls such as label, segmented buttons, Select should be placed here. Content that are placed here will always be centrally positioned
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentMiddle
 * @function
 */


/**
 * Inserts a contentMiddle into the aggregation named <code>contentMiddle</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentMiddle the contentMiddle to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentMiddle should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentMiddle is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentMiddle is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentMiddle
 * @function
 */

/**
 * Adds some contentMiddle <code>oContentMiddle</code> 
 * to the aggregation named <code>contentMiddle</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentMiddle
 * @function
 */

/**
 * Removes an contentMiddle from the aggregation named <code>contentMiddle</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentMiddle the contentMiddle to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentMiddle or null
 * @public
 * @name sap.m.Bar#removeContentMiddle
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentMiddle</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentMiddle
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentMiddle</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentMiddle the contentMiddle whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentMiddle
 * @function
 */
	

/**
 * Destroys all the contentMiddle in the aggregation 
 * named <code>contentMiddle</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentMiddle
 * @function
 */


/**
 * Getter for aggregation <code>contentRight</code>.<br/>
 * this is the right content area. Controls such as Action buttons or Search field could be placed here.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.m.Bar#getContentRight
 * @function
 */


/**
 * Inserts a contentRight into the aggregation named <code>contentRight</code>.
 *
 * @param {sap.ui.core.Control}
 *          oContentRight the contentRight to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the contentRight should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the contentRight is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the contentRight is inserted at 
 *             the last position        
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#insertContentRight
 * @function
 */

/**
 * Adds some contentRight <code>oContentRight</code> 
 * to the aggregation named <code>contentRight</code>.
 *
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight to add; if empty, nothing is inserted
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#addContentRight
 * @function
 */

/**
 * Removes an contentRight from the aggregation named <code>contentRight</code>.
 *
 * @param {int | string | sap.ui.core.Control} vContentRight the contentRight to remove or its index or id
 * @return {sap.ui.core.Control} the removed contentRight or null
 * @public
 * @name sap.m.Bar#removeContentRight
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>contentRight</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Bar#removeAllContentRight
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>contentRight</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oContentRight the contentRight whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Bar#indexOfContentRight
 * @function
 */
	

/**
 * Destroys all the contentRight in the aggregation 
 * named <code>contentRight</code>.
 * @return {sap.m.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Bar#destroyContentRight
 * @function
 */


// Start of sap/m/Bar.js
/**
 * @private
 */

sap.m.Bar.prototype.init = function() { 
};

sap.m.Bar.prototype.onBeforeRendering = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

sap.m.Bar.prototype.onAfterRendering = function() {
	this._updatePosition();
};

/**
 * Called when the control is destroyed.
 *
 * @private
 */
sap.m.Bar.prototype.exit = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
};

/*
 * @private
 */
sap.m.Bar.prototype._updatePosition = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	
	var $bar = this.$();
	if (!this.getDomRef()) {
		return; // if Bar is not rendered do no check and do not re-register the resize handler
	}

	var iBarWidth = $bar.outerWidth(true);
	var $leftBar = jQuery.sap.byId( this.getId() + "-BarLeft");
	var $rightBar = jQuery.sap.byId( this.getId() + "-BarRight");
	var $midBarPH = jQuery.sap.byId( this.getId() + "-BarPH");

	var bContentLeft = !!this.getContentLeft().length,
		bContentMiddle = !!$midBarPH.children().length,
		bContentRight = !!this.getContentRight().length;

	if (!bContentLeft && !bContentRight){
		$midBarPH.css({'width': '100%'});
	} else if(bContentLeft && !bContentMiddle & !bContentRight) {
		$leftBar.css({'width': '100%'});
	} else if(!bContentLeft && !bContentMiddle & bContentRight) {
		$rightBar.css({'width': '100%'});
	} else {
		// reset to default
		$leftBar.css({'width': 'auto'});
		var aLBChildren = $leftBar.children();
		var iLeftBarChildrenTotalWidth = 0;
		var iLBWidth = 0;
		
		// Chrome browser has a problem in providing the correct div size when image inside does not have width explicitly set
		if(sap.ui.Device.browser.webkit){
			for(var i= 0; i < aLBChildren.length ; i++){
				iLeftBarChildrenTotalWidth += jQuery(aLBChildren[i]).outerWidth(true);
			}
			iLBWidth = $leftBar.outerWidth(true);
		} else {
		// IE & firefox has a rounding issue with JQuery.outerWidth
			var oLBChildrenStyle = null;
			for(var i= 0; i < aLBChildren.length ; i++){
				oLBChildrenStyle = window.getComputedStyle(aLBChildren[i]);
				if (oLBChildrenStyle.width == "auto"){
					iLeftBarChildrenTotalWidth += jQuery(aLBChildren[i]).width() + 1; //add an additional 1 pixel because of rounding issue.
				}else {
					iLeftBarChildrenTotalWidth += parseFloat(oLBChildrenStyle.width);
				}
				iLeftBarChildrenTotalWidth += parseFloat(oLBChildrenStyle.marginLeft);
				iLeftBarChildrenTotalWidth += parseFloat(oLBChildrenStyle.marginRight);
				iLeftBarChildrenTotalWidth += parseFloat(oLBChildrenStyle.paddingLeft);
				iLeftBarChildrenTotalWidth += parseFloat(oLBChildrenStyle.paddingRight);
			}
			var oLBComputedStyle = window.getComputedStyle(jQuery.sap.domById( this.getId() + "-BarLeft"));
			iLBWidth += parseFloat(oLBComputedStyle.width); 
			iLBWidth += parseFloat(oLBComputedStyle.marginLeft);
			iLBWidth += parseFloat(oLBComputedStyle.marginRight);
			iLBWidth += parseFloat(oLBComputedStyle.paddingLeft); 
			iLBWidth += parseFloat(oLBComputedStyle.paddingRight);
		}
		
		if (iLBWidth < iLeftBarChildrenTotalWidth){
			iLBWidth = iLeftBarChildrenTotalWidth;
			$leftBar.css({'width': iLBWidth});
		}
		
		var $midBar  = jQuery.sap.byId( this.getId() + "-BarMiddle");
		var iMBWidth = $midBar.outerWidth(true);
		// reset to default
		$midBarPH.css({'position': 'static', 'width': 'auto', 'visibility': 'hidden'});
		var iMBPHWidth = $midBarPH.outerWidth(true);
		var oMBPHPosition = $midBarPH.position(); 
		// reset to default
		$rightBar.css({'width': 'auto'});
		var iRBWidth = $rightBar.outerWidth(true);
		var oRBPosition = $rightBar.position();
		var oLBPosition = $leftBar.position();
		
		if (this.getEnableFlexBox()){
			$midBarPH.css({'position': 'absolute', 'left': iLBWidth});
			$midBarPH.width(iBarWidth - iLBWidth - iRBWidth - parseInt($midBarPH.css('margin-left'), 10) - parseInt($midBarPH.css('margin-right'), 10));
		} else {
			var bRtl = sap.ui.getCore().getConfiguration().getRTL();
			// during flip animation, it happens that the right area is not correctly positioned by the browser yet; If so, the rest of the calculation should be skipped
			if( bRtl? (Math.round(oLBPosition.left) + iLBWidth >= iBarWidth):(Math.round(oRBPosition.left) + iRBWidth >= iBarWidth)){
				// handle the case when left and right content are wider than the bar itself
				if (iBarWidth < (iLBWidth + iRBWidth)){
					// this scenario happens mostly when a very long title text is set in the left content area
					// hence we make sure the rightContent always has enough space and reduce the left content area width accordingly
					if (iRBWidth > iBarWidth){
						$rightBar.width(iBarWidth);
						$leftBar.width(0);
					} else {
						$leftBar.width(iBarWidth - iRBWidth);
					}
				}
				
				if (!bRtl && oMBPHPosition.left < iLBWidth){
					// place the middle positioned element directly next to the end of left content area
					$midBarPH.css({'position': 'absolute', 'left': iLBWidth});
					oMBPHPosition = $midBarPH.position();
				} else if (bRtl && oMBPHPosition.left <= iRBWidth){
					// place the middle positioned element directly next to the end of left content area
					$midBarPH.css({'position': 'absolute', 'left': iRBWidth});
					oMBPHPosition = $midBarPH.position();
				}
				
				// check if middle content area width overlaps with right content area, if yes, shorten the width of middle content area
				if (!bRtl){
					if ((oMBPHPosition.left + iMBPHWidth) > oRBPosition.left){
						if (oRBPosition.left < oMBPHPosition.left){
							$midBarPH.width(0);
						} else {
							$midBarPH.width(oRBPosition.left - oMBPHPosition.left);
						}
					}
				} else {
					if ((oMBPHPosition.left + iMBPHWidth) > oLBPosition.left){
						if (oLBPosition.left < oMBPHPosition.left){
							$midBarPH.width(0);
						} else {
							$midBarPH.width(oLBPosition.left - oMBPHPosition.left);
						}
					}
				}
				
				if ($midBarPH.outerWidth() > iMBWidth){
					$midBarPH.width(iMBWidth);
				} 
			}
		}
		$midBarPH.css({'visibility': 'inherit'});
	}	
	//listen to resize
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(),  jQuery.proxy(this._updatePosition, this));
};