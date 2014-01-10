/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.InputBase.
jQuery.sap.declare("sap.m.InputBase");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new InputBase.
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
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: sap.ui.core.ValueState.None)</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.InputBase#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Base control for Input fields.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.3
 *
 * @constructor   
 * @public
 * @since 1.12.0
 * @name sap.m.InputBase
 */
sap.ui.core.Control.extend("sap.m.InputBase", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"value" : {type : "string", group : "Data", defaultValue : null, bindable : "bindable"},
		"width" : {type : "sap.ui.core.CSSSize", group : "Appearance", defaultValue : null},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"valueState" : {type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"placeholder" : {type : "string", group : "Misc", defaultValue : null},
		"editable" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.InputBase with name <code>sClassName</code> 
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
 * @name sap.m.InputBase.extend
 * @function
 */

sap.m.InputBase.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>value</code>.
 * Input Value
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * @name sap.m.InputBase#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setValue
 * @function
 */


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#bindValue
 * @function
 */

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#unbindValue
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the input.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.InputBase#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setWidth
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Boolean property to enable the control (default is true).
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.InputBase#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setEnabled
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Invisible inputs are not rendered
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.InputBase#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setVisible
 * @function
 */


/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * @name sap.m.InputBase#getValueState
 * @function
 */

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setValueState
 * @function
 */


/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.InputBase#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setName
 * @function
 */


/**
 * Getter for property <code>placeholder</code>.
 * text shown when no value available
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>placeholder</code>
 * @public
 * @name sap.m.InputBase#getPlaceholder
 * @function
 */

/**
 * Setter for property <code>placeholder</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sPlaceholder  new value for property <code>placeholder</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#setPlaceholder
 * @function
 */


/**
 * Getter for property <code>editable</code>.
 * Controls if a user can change the value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * @since 1.12.0
 * @name sap.m.InputBase#getEditable
 * @function
 */

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @since 1.12.0
 * @name sap.m.InputBase#setEditable
 * @function
 */


/**
 * This event gets fired when the input operation has finished and the value has changed. 
 *
 * @name sap.m.InputBase#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new value of the input
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.InputBase</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.InputBase</code>.<br/> itself. 
 *  
 * This event gets fired when the input operation has finished and the value has changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.InputBase</code>.<br/> itself.
 *
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.InputBase</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.InputBase#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new value of the input</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.InputBase} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.InputBase#fireChange
 * @function
 */


// Start of sap/m/InputBase.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.InputBase.prototype);

jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();

sap.m.InputBase.prototype.init = function() {
	this._curpos = 0;		// cursor position
	this._lastValue = "";	// last changed value
	this._changeProxy = jQuery.proxy(this._onChange, this);
};

// use labels as placeholder configuration
sap.m.InputBase.prototype._showLabelAsPlaceholder = (function($) {
	if (!("placeholder" in document.createElement("input"))) {
		return true;
	}

	var useLabel = $.support.touch;
	if (useLabel && (
		// these OS supports right alignable placeholder natively
		// so we do not need selfmade placeholder
		// test page :  http://jsfiddle.net/qKPX2/3/
		($.os.ios && $.os.fVersion >= 6) ||
		($.os.android && $.browser.chrome)) ||
		($.os.blackberry && $.os.fVersion >= 10)) {
		useLabel = null;	//this means derived class can make it's own checking
	}
	return useLabel;
}(jQuery));

sap.m.InputBase.prototype.onBeforeRendering = function() {
	if (this.getDomRef()) {
		this._$input.off();	// remove all events
		this._curpos = this._$input.cursorPos();
	}
};

sap.m.InputBase.prototype.onAfterRendering = function() {
	this._$input = jQuery.sap.byId(this.getId() + "-inner");
	this._$input.bind("change", this._changeProxy);
	if (this._showLabelAsPlaceholder) {
		this._$label = this.$().find('label');
		this._setLabelVisibility();
	}
};

sap.m.InputBase.prototype.exit = function() {
	delete this._$input;
	delete this._$label;
};

sap.m.InputBase.prototype.getFocusDomRef = function() {
	return (this.getDomRef() ? this._$input[0] : null);
};

sap.m.InputBase.prototype.getIdForLabel = function() {
	return this.getId() + '-inner';
};

sap.m.InputBase.prototype.ontouchstart = function(oEvent) {
	//for control who need to know if they should handle events from the input control
	oEvent.originalEvent._sapui_handledByControl = true;
};

sap.m.InputBase.prototype.setValueState = function(sValueState) {
	var sOldValueState = this.getValueState();

	if (sValueState == sOldValueState) {
		return this;
	}
	if (!this.getDomRef()) {
		return this.setProperty("valueState", sValueState);
	}

	var	$container = this.$();
	this.setProperty("valueState", sValueState, true);

	if (sOldValueState && sOldValueState != "None") {
		$container.removeClass("sapMInputBase" + sOldValueState);
		this._$input.removeClass("sapMInputBase" + sOldValueState + "Inner");
	}
	if (sValueState && sValueState != "None") {
		$container.addClass("sapMInputBase" + sValueState);
		this._$input.addClass("sapMInputBase" + sValueState + "Inner");
	}

	return this;
};

sap.m.InputBase.prototype.setValue = function(sValue) {
	sValue = this.validateProperty("value", sValue);
	sValue = this._getInputValue(sValue);
	if (sValue != this.getValue()) {
		this._lastValue = sValue;
		this.setProperty("value", sValue, true);
		if (this.getDomRef() && this._$input.val() != sValue) {
			this._$input.val(sValue);
			this._setLabelVisibility();
			this._curpos = this._$input.cursorPos();
		}
	}
	return this;
};

sap.m.InputBase.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth, true);
	if (this.getDomRef()) {
		this.$().width(sWidth);
	}
	return this;
};

sap.m.InputBase.prototype.setPlaceholder = function(sPlaceholder) {
	this.setProperty("placeholder", sPlaceholder, true);
	if (this.getDomRef()) {
		if (this._$label) {
			this._$label.text(sPlaceholder);
		} else {
			this._$input.attr("placeholder", sPlaceholder);
		}
	}
	return this;
};

sap.m.InputBase.prototype.setMaxLength = function(iMaxLength) {
	if (iMaxLength < 0) {
		return this;
	}

	this.setProperty("maxLength", iMaxLength, true);
	if (this.getDomRef()){
		if (iMaxLength == 0) {
			this._$input.removeAttr("maxlength");
		} else {
			this._$input.val(this._$input.val().substring(0, iMaxLength));
			this._$input.attr("maxlength", iMaxLength);
		}
	}
	return this;
};

sap.m.InputBase.prototype._setLabelVisibility = function() {
	if (this.getDomRef() && this._$label) {
		this._$label.css("display", this.getValue() ? "none" : "inline");
	}
};

sap.m.InputBase.prototype._getInputValue = function(sValue) {
	sValue = (typeof sValue == "undefined") ? this._$input.val() : sValue.toString();
	if (this.getMaxLength && this.getMaxLength() > 0) {
		sValue = sValue.substring(0, this.getMaxLength());
	}
	return sValue;
};

sap.m.InputBase.prototype._onChange = function(oEvent) {
	var sValue = this._getInputValue();
	if (sValue != this._lastValue) {
		this.setProperty("value", sValue, true);
		this._curpos = this._$input.cursorPos();
		this._setLabelVisibility();
		this._lastValue = sValue;
		this.fireChange({
			newValue : sValue
		});
	}
};

sap.m.InputBase.prototype._bindToInputEvent = function(fnCallback) {
	this._$input.on("input", fnCallback);

	// input event in IE9 doesn't fire when we hit BACKSPACE / DEL / CUT
	if (jQuery.browser.msie && jQuery.browser.fVersion < 10) {
		this._$input.on({
			cut : function(e) {
				setTimeout(function() {
					fnCallback(e);
				}, 0);
			},
			keyup : function(e) {
				var oKC = jQuery.sap.KeyCodes;
				if (e.keyCode == oKC.DELETE || e.keyCode == oKC.BACKSPACE) {
					fnCallback(e);
				}
			}
		});
	}
};

// IE9 doesn't fire change event for inputs when we hit Enter
sap.m.InputBase.prototype.onsapenter = function(oEvent) {
	if (jQuery.browser.msie && jQuery.browser.fVersion < 10 && oEvent.target.tagName == "INPUT") {
		this._onChange(oEvent);
	}
};

// Revert to old value on escape
sap.m.InputBase.prototype.onsapescape = function(oEvent) {
	var sValue = this.getValue();
	if (sValue != this._lastValue) {
		this.setValue(this._lastValue);
		if (this.fireLiveChange) {
			this.fireLiveChange({
				newValue : this._lastValue
			});
		}
	}
};

// Override form navigation inside of a Form container
// TODO: remove this when switch to edit mode is implemented
sap.m.InputBase.prototype._onKeyInForm = function(oEvent) {
	if(sap.ui.layout.form.FormElement
		&& this.getParent() instanceof sap.ui.layout.form.FormElement){
			oEvent.stopPropagation();
	}
};
// keep left, right, and home, end native but allow form navigation via up and down keys
sap.m.InputBase.prototype.onsapleft = function(oEvent) {
	this._onKeyInForm(oEvent);
};
sap.m.InputBase.prototype.onsapright = function(oEvent) {
	this._onKeyInForm(oEvent);
};
sap.m.InputBase.prototype.onsaphome = function(oEvent) {
	this._onKeyInForm(oEvent);
};
sap.m.InputBase.prototype.onsapend = function(oEvent) {
	this._onKeyInForm(oEvent);
};

sap.m.InputBase.prototype.getFocusInfo = function () {
	return {
		id : this.getId(),
		cursorPos : this._curpos
	};
};

sap.m.InputBase.prototype.applyFocusInfo = function(oFocusInfo) {
	if (this.getDomRef()) {
		sap.ui.core.Element.prototype.applyFocusInfo.call(this, oFocusInfo);
		this._$input.cursorPos(this._curpos);
	}
	return this;
};