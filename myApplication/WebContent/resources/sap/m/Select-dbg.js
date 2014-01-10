/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.Select.
jQuery.sap.declare("sap.m.Select");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Select.
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
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 'auto')</li>
 * <li>{@link #getMaxWidth maxWidth} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getSelectedKey selectedKey} : string</li>
 * <li>{@link #getSelectedItemId selectedItemId} : string</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getType type} : sap.m.SelectType (default: sap.m.SelectType.Default)</li>
 * <li>{@link #getAutoAdjustWidth autoAdjustWidth} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedItem selectedItem} : string | sap.ui.core.Item</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.Select#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * The select control provides a menu of predefined items that allows end users to choose options.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.16.3
 *
 * @constructor   
 * @public
 * @name sap.m.Select
 */
sap.ui.core.Control.extend("sap.m.Select", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"isOpen", "open", "close", "getItemByKey", "getFirstItem", "getLastItem", "getItemAt"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"name" : {type : "string", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true},
		"width" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : 'auto'},
		"maxWidth" : {type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : '100%'},
		"selectedKey" : {type : "string", group : "Data", defaultValue : null},
		"selectedItemId" : {type : "string", group : "Misc", defaultValue : null},
		"icon" : {type : "sap.ui.core.URI", group : "Appearance", defaultValue : null},
		"type" : {type : "sap.m.SelectType", group : "Appearance", defaultValue : sap.m.SelectType.Default},
		"autoAdjustWidth" : {type : "boolean", group : "Appearance", defaultValue : false}
	},
	defaultAggregation : "items",
	aggregations : {
    	"items" : {type : "sap.ui.core.Item", multiple : true, singularName : "item", bindable : "bindable"}, 
    	"popover" : {type : "sap.m.Popover", multiple : false, visibility : "hidden"}, 
    	"dialog" : {type : "sap.m.Dialog", multiple : false, visibility : "hidden"}
	},
	associations : {
		"selectedItem" : {type : "sap.ui.core.Item", multiple : false}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.Select with name <code>sClassName</code> 
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
 * @name sap.m.Select.extend
 * @function
 */

sap.m.Select.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>name</code>.
 * The name to be used in the HTML code (e.g. for HTML forms that send data to the server via submit).
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * @name sap.m.Select#getName
 * @function
 */

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setName
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * Determines whether the control is visible or not.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.Select#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * Determines whether the user can change the selected value.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.Select#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setEnabled
 * @function
 */


/**
 * Getter for property <code>width</code>.
 * Defines the width of the select input. The default width of a select control depends on the width of the widest option/item in the list. This value can be provided in %, em, px… and all possible CSS measures.
 * Note: The width will be ignored if the "autoAdjustWidth" property is set to true.
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.Select#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setWidth
 * @function
 */


/**
 * Getter for property <code>maxWidth</code>.
 * Defines the maximum width of the select input. This value can be provided in %, em, px… and all valid CSS measures.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>maxWidth</code>
 * @public
 * @name sap.m.Select#getMaxWidth
 * @function
 */

/**
 * Setter for property <code>maxWidth</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sMaxWidth  new value for property <code>maxWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setMaxWidth
 * @function
 */


/**
 * Getter for property <code>selectedKey</code>.
 * Key of the selected item. If the key has no corresponding aggregated item, no changes will apply. If duplicate keys exists the first item matching the key is used.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedKey</code>
 * @public
 * @since 1.11
 * @name sap.m.Select#getSelectedKey
 * @function
 */

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedKey  new value for property <code>selectedKey</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */


/**
 * Getter for property <code>selectedItemId</code>.
 * Id of the selected item. If the id has no corresponding aggregated item, no changes will apply.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>selectedItemId</code>
 * @public
 * @since 1.12
 * @name sap.m.Select#getSelectedItemId
 * @function
 */

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSelectedItemId  new value for property <code>selectedItemId</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * The URI to the icon that will be displayed only when using the “IconOnly” type.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setIcon
 * @function
 */


/**
 * Getter for property <code>type</code>.
 * Type of a select. Possibles values "Default", "IconOnly".
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.m.SelectType} the value of property <code>type</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getType
 * @function
 */

/**
 * Setter for property <code>type</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.m.SelectType} oType  new value for property <code>type</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setType
 * @function
 */


/**
 * Getter for property <code>autoAdjustWidth</code>.
 * If set to true, the width of the select input is determined by the selected item’s content.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>autoAdjustWidth</code>
 * @public
 * @since 1.16
 * @name sap.m.Select#getAutoAdjustWidth
 * @function
 */

/**
 * Setter for property <code>autoAdjustWidth</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bAutoAdjustWidth  new value for property <code>autoAdjustWidth</code>
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @since 1.16
 * @name sap.m.Select#setAutoAdjustWidth
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * Items of the Item control.
 * 
 * @return {sap.ui.core.Item[]}
 * @public
 * @name sap.m.Select#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id
 * @return {sap.ui.core.Item} the removed item or null
 * @public
 * @name sap.m.Select#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Item[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.Select#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Item}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.Select#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#destroyItems
 * @function
 */


/**
 * Binder for aggregation <code>items</code>.
 *
 * @param {string} sPath path to a list in the model 
 * @param {sap.ui.core.Element} oTemplate the control template for this aggregation
 * @param {sap.ui.model.Sorter} oSorter the initial sort order (optional)
 * @param {array} aFilters the predefined filters for this aggregation (optional)
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#bindItems
 * @function
 */

/**
 * Unbinder for aggregation <code>items</code>.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#unbindItems
 * @function
 */


/**
 * Retrieves the selected item from the aggregation named <code>items</code>.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedItem</code> association, or null
 * @public
 * @name sap.m.Select#getSelectedItem
 * @function
 */

/**
 * Retrieves the selected item from the aggregation named <code>items</code>.
 *
 * @param {string | sap.ui.core.Item} vSelectedItem 
 *    Id of an element which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */


	
/**
 * This event will be triggered when the user changes the selected item. 
 *
 * @name sap.m.Select#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.core.Item} oControlEvent.getParameters.selectedItem The selected item.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.Select</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.Select</code>.<br/> itself. 
 *  
 * This event will be triggered when the user changes the selected item. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.Select</code>.<br/> itself.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.Select</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItem' of type <code>sap.ui.core.Item</code> The selected item.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.Select#fireChange
 * @function
 */


/**
 * Checks if the select is open. It returns true when the select is currently open, this includes opening and closing animations, otherwise it returns false.
 *
 * @name sap.m.Select.prototype.isOpen
 * @function

 * @type boolean
 * @public
 * @since 1.16
 */


/**
 * Open the select.
 *
 * @name sap.m.Select.prototype.open
 * @function

 * @type sap.m.Select
 * @public
 * @since 1.16
 */


/**
 * Closes the select.
 *
 * @name sap.m.Select.prototype.close
 * @function

 * @type sap.m.Select
 * @public
 * @since 1.16
 */


/**
 * Retrieves the first item object from the aggregation named <code>items</code>, based on it's key.
 *
 * @name sap.m.Select.prototype.getItemByKey
 * @function
 * @param {string} 
 *         sSKey
 *         An item key that identifies the item to retrieve.

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the first item from the aggregation named <code>items</code>.
 *
 * @name sap.m.Select.prototype.getFirstItem
 * @function

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the last item from the aggregation named <code>items</code>.
 *
 * @name sap.m.Select.prototype.getLastItem
 * @function

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


/**
 * Retrieves the item from the aggregation named <code>items</code> at the given 0-based index.
 *
 * @name sap.m.Select.prototype.getItemAt
 * @function
 * @param {int} 
 *         iIIndex
 *         iIndex Index of the item to return

 * @type sap.ui.core.Item
 * @public
 * @since 1.16
 */


// Start of sap/m/Select.js
jQuery.sap.require("sap.ui.core.theming.Parameters");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
jQuery.sap.require("sap.m.Input");
jQuery.sap.require("sap.m.Bar");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.core.IconPool.insertFontFaceStyle();
sap.ui.core.EnabledPropagator.apply(sap.m.Select.prototype, [true]);

/* =========================================================== */
/*             begin: private methods and properties           */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* private properties                                          */
/* ----------------------------------------------------------- */

sap.m.Select.prototype._oRb = sap.ui.getCore().getLibraryResourceBundle("sap.m");

sap.m.Select.prototype._bUsePopup = sap.ui.core.theming.Parameters.get("sapMPlatformDependent") !== "true";

sap.m.Select.prototype._bUseCustomSelect = (sap.ui.Device.os.android && sap.ui.Device.os.version === 2.3) && sap.ui.core.theming.Parameters.get("sapMPlatformDependent") === "true";

/* ----------------------------------------------------------- */
/* private methods                                             */
/* ----------------------------------------------------------- */

sap.m.Select.prototype._cacheDomRefs = function() {

	// jQuery DOM reference to the select control root
	this._$Select = this.$();

	// jQuery DOM reference to the native select using inside the control
	this._$HtmlSelect = this._$Select.children("select");

	// jQuery DOM collection with all select options
	this._$Options = this._$HtmlSelect.children("option");

	// jQuery DOM reference with the selected option
	this._$SeletedOption = this._$Options.filter(":selected");

	// jQuery DOM reference to the label used to show the text of the current selected item
	this._$Label = this._$Select.children("." + sap.m.SelectRenderer.CSS_CLASS + "Label");
};

sap.m.Select.prototype._getParentPopup = function() {
	return this._$Select.closest("[data-sap-ui-popup]") || null;
};

/**
 * Synchronize selected item and key.
 *
 * @param {sap.ui.core.Item} oItem
 * @param {string} sKey
 * @param {array} [aItems]
 * @private
 */
sap.m.Select.prototype._synchronizeSelectedItemAndKey = function(oItem, sKey, aItems) {

	/*
	 *	functional dependencies:
	 *
	 *	selectedKey  -> selectedItem, selectedItemId
	 *	selectedItem -> selectedItemId, selectedKey
	 *
	 *	items        -> selectedItem, selectedItemId, selectedKey
	 */

	if (!aItems.length) {

		// Update "selectedItem" association, "selectedItemId"
		// and "selectedKey" properties by setting its defaults values.
		this._setSelectedItem(null, "", "", true);

		jQuery.sap.log.info("Info: _synchronizeSelectedItemAndKey() the select control does not contain any item on", this);

		return;
	}

	//
	if (sKey !== (oItem && oItem.getKey())) {

		oItem = this.getItemByKey("" + sKey);

		// if the "selectedKey" has no corresponding aggregated item, no changes will apply
		if (oItem) {

			// Update and synchronize "selectedItem" association and
			// "selectedKey" property.
			this.setAssociation("selectedItem", oItem, true);	// suppress re-rendering
			this.setProperty("selectedItemId", oItem.getId(), true);	// suppress re-rendering

			return;
		}

		// if the key does not have a default value
		if (sKey !== "") {
			jQuery.sap.log.warning('Warning: _synchronizeSelectedItemAndKey() the key "' + sKey + '" has no corresponding aggregated item on ', this);

			return;
		}

		oItem = this._findFirstEnabledItem(this.getItems());

		if (oItem) {
			this._setSelectedItem(oItem, oItem.getId(), oItem.getKey(), true);
		}

	} else if (aItems.indexOf(oItem) === -1) {	// validate if the selected item is aggregated
		jQuery.sap.log.warning('Warning: _synchronizeSelectedItemAndKey() the sap.ui.core.Item instance or sap.ui.core.Item id is not a valid aggregation on', this);
	}
};

sap.m.Select.prototype._unbindBrowserChangeEvent = function() {
	if (this._$HtmlSelect) {
		this._$HtmlSelect.off("change." + sap.m.SelectRenderer.CSS_CLASS, this._handleBrowserChangeEvent);
	}
};

/**
 * Retrieves the first enabled item from the aggregation named <code>items</code>.
 *
 * @param {array} [aItems]
 * @return {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findFirstEnabledItem = function(aItems) {
	var aItems = aItems || this.getItems();

	for (var i = 0; i < aItems.length; i++) {
		if (aItems[i].getEnabled()) {
			return aItems[i];
		}
	}

	return null;
};

/**
 * Retrieves the last enabled item from the aggregation named <code>items</code>.
 *
 * @param {array} [aItems]
 * @return {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findLastEnabledItem = function(aItems) {
	return this._findFirstEnabledItem(aItems.reverse());
};

/**
 * Update and synchronize "selectedItem" association, "selectedItemId", "selectedKey" properties and
 * the "selectedItem" in the List.
 *
 * @param {sap.ui.core.Item | string | null} vItem
 * @param {string} sItemId
 * @param {string} sSelectedKey
 * @param {boolean} bSuppressInvalidate
 * @private
 */
sap.m.Select.prototype._setSelectedItem = function(vItem, sItemId, sKey, bSuppressInvalidate) {

	this.setAssociation("selectedItem", vItem, bSuppressInvalidate);
	this.setProperty("selectedItemId", sItemId, bSuppressInvalidate);
	this.setProperty("selectedKey", sKey, bSuppressInvalidate);

	this._setSelectedListItem(this._getSelectedListItem());
};

/**
 * Sets the selected item in the List.
 *
 * @param {sap.m.StandardListItem | null} oSelectedListItem
 * @private
 */
sap.m.Select.prototype._setSelectedListItem = function(oSelectedListItem) {
	var oListItem;

	if (!this._oList || !oSelectedListItem) {
		return;
	}

	oListItem = this._oList.getSelectedItem();
	this._oList.setSelectedItem(oListItem, false);	// note: this is needed because the List do not remove the old selected item

	// sets the selected item
	this._oList.setSelectedItem(oSelectedListItem, true);
};

/**
 * Get the selected item in the List.
 *
 * @returns sap.m.StandardListItem
 * @private
 */
sap.m.Select.prototype._getSelectedListItem = function() {
	var oItem = this.getSelectedItem();
	return (oItem && oItem._oListItem) ? oItem._oListItem : null;
};

sap.m.Select.prototype._addFocusableContent = function($DomRef) {
	var sDomRefId,
		sEventId;

	if (!$DomRef || !this.getPopup()) {
		return;
	}

	sDomRefId = $DomRef.attr("data-sap-ui-popup");
	sEventId = "sap.ui.core.Popup.addFocusableContent-" + sDomRefId;

	sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, {
		id : this.getPopup().getId()
	});
};

sap.m.Select.prototype._removeFocusableContent = function($DomRef) {
	var sDomRefId,
		sEventId;

	if (!$DomRef || !this.getPopup()) {
		return;
	}

	sDomRefId = $DomRef.attr("data-sap-ui-popup");
	sEventId = "sap.ui.core.Popup.removeFocusableContent-" + sDomRefId;

	sap.ui.getCore().getEventBus().publish("sap.ui", sEventId, {
		id : this.getPopup().getId()
	});
};

/**
 * Scrolls the list item into the visual viewport.
 *
 * @private
 */
sap.m.Select.prototype._scrollListItemIntoView = function(bAlignWithTop) {
	var oSelectedListItem = this._getSelectedListItem(),
		oListItemDomRef;

	if (!sap.ui.Device.system.desktop || !oSelectedListItem) {
		return;
	}

	// scrolls the list item DOM reference into the visual viewport
	oListItemDomRef = oSelectedListItem.getDomRef();
	oListItemDomRef && oListItemDomRef.scrollIntoView(bAlignWithTop);
};

/**
 * Sets the text value of the Select field.
 *
 * @param {string} sValue
 * @private
 */
sap.m.Select.prototype._setValue = function(sValue) {

	// change the label text
	if (this._$Label && this._$Label.length) {
		this._$Label.text(sValue);
	}
};

/**
 * Map an item type of sap.ui.core.Item to an item type of sap.m.StandardListItem.
 *
 * @param {sap.ui.core.Item} oItem
 * @return {sap.m.StandardListItem}
 * @private
 */
sap.m.Select.prototype._mapItemToListItem = function(oItem) {
	return new sap.m.StandardListItem({
		title: oItem.getText(),
		type: oItem.getEnabled() ? sap.m.ListType.Active : sap.m.ListType.Inactive
	});
};

/**
 * Given a item type of sap.m.StandardListItem, find the corresponding item type of sap.ui.core.Item.
 *
 * @param {sap.m.StandardListItem} oListItem
 * @return {sap.ui.core.Item | null}
 * @private
 */
sap.m.Select.prototype._findMappedItem = function(oListItem) {
	for (var i = 0, aItems = this.getItems(), aItemsLength = aItems.length; i < aItemsLength; i++) {
		if (aItems[i]._oListItem === oListItem) {
			return aItems[i];
		}
	}

	return null;
};

/**
 *
 * @param {object} $NewSeletedOption
 * @private
 */
sap.m.Select.prototype._updateSelectedOption = function($NewSeletedOption) {

	// update the "selected" attribute
	this._$SeletedOption[0].removeAttribute("selected");
	$NewSeletedOption[0].setAttribute("selected", "selected");

	// update the CSS selector with the new selected option
	this._$SeletedOption = $NewSeletedOption;
};

/**
*
* @param {object} oNewSelectedItem
* @private
*/
sap.m.Select.prototype._updateSelectedItem = function(oNewSelectedItem) {
	var sItemId = oNewSelectedItem.getId();

	if (oNewSelectedItem === this.getSelectedItem()) {
		return;
	}

	/*
	 * Update and synchronize "selectedItem" association "setSelectedItemId"
	 * and "selectedKey" properties.
	 * Re-rendering is not needed.
	 */
	this._setSelectedItem(sItemId, sItemId, oNewSelectedItem.getKey(), true);

	// change the label text
	this._setValue(oNewSelectedItem.getText());

	// fire the change event
	this.fireChange({ selectedItem: oNewSelectedItem });
};

/**
 * Fill the list of items.
 *
 * @param {array} aItems An array with items type of sap.ui.core.Item.
 * @private
 */
sap.m.Select.prototype._fillList = function(aItems) {
	if (!aItems) {
		return;
	}

	for (var i = 0, oListItem, oSelectedItem = this.getSelectedItem(), aItemsLength = aItems.length; i < aItemsLength; i++) {

		// add a private property to the added item containing a reference
		// to the corresponding mapped item
		aItems[i]._oListItem = oListItem = this._mapItemToListItem(aItems[i]);

		if (sap.ui.core.Popup.prototype.touchEnabled) {
			oListItem.addEventDelegate({
				ontouchstart: function(oEvent) {
					(oEvent.originalEvent || oEvent)._sapui_cancelAutoClose = true;
				}
			})
		}

		// add active state to the selected item
		if (aItems[i] === oSelectedItem) {
			this._oList.setSelectedItem(oListItem);
		}

		// add the mapped item type of sap.m.StandardListItem to the list
		this._oList.addAggregation("items", oListItem, true);	// note: suppress re-rendering
	}
};

/**
 * Destroy the items in the menu.
 *
 * @private
 */
sap.m.Select.prototype._clearList = function() {
	this._oList && this._oList.destroyAggregation("items", true);	// note: suppress re-rendering
};

/**
 * Popup Factory singleton.
 *
 * @param {string} sPopupType
 * @return {sap.m.Popover|sap.m.Dialog}
 * @private
 * @function
 */
sap.m.Select.prototype._createPopupFactory = function(sPopupType) {
	if (!this.hasOwnProperty("_o" + sPopupType)) {
		return this["_create" + sPopupType]();
	}

	return this.getPopup();
};

sap.m.Select.prototype._isRequiredSelectElement = function() {
	if (!this._bUsePopup) {
		return true;
	} else if (this.getAutoAdjustWidth()) {
		return false;
	} else if (this.getWidth() === "auto") {
		return true;
	}
};

sap.m.Select.prototype._addActiveState = function() {
	this._$Select.addClass(sap.m.SelectRenderer.CSS_CLASS + "Pressed");
};

sap.m.Select.prototype._removeActiveState = function() {
	this._$Select.removeClass(sap.m.SelectRenderer.CSS_CLASS + "Pressed");
};

sap.m.Select.prototype._destroyDomRefs = function() {
	this._$Select = null;
	this._$HtmlSelect = null;
	this._$Options = null;
	this._$SeletedOption = null;
	this._$Label = null;
};

/* List */

sap.m.Select.prototype._createList = function() {

	// list to use inside the pop-up
	this._oList = new sap.m.List({
		width: "100%",
		mode: sap.m.ListMode.SingleSelectMaster
	}).attachBrowserEvent("tap", function() {
		this.close();
	}, this);

	this._oList.attachSelectionChange(this._handleSelectionChangeEvent, this);
};

/* Pop-up */

sap.m.Select.prototype.onBeforeOpen = function() {
	var oPopup = this.getPopup(),
		fnPopupTypeBeforeOpen = this["_onBeforeOpen" + this._getPopupType()];

	oPopup.addContent(this._oList);
	this.addContent(oPopup);

	fnPopupTypeBeforeOpen && fnPopupTypeBeforeOpen.call(this);
};

sap.m.Select.prototype.onAfterOpen = function() {};

sap.m.Select.prototype.onBeforeClose = function() {};

sap.m.Select.prototype.onAfterClose = function() {

	// remove the active state of the select HTMLDIVElement container
	this._removeActiveState();
};

/**
 * Setter for the pop-up.
 *
 * @param {sap.m.Dialog | sap.m.Popover} oPopup
 * @private
 */
sap.m.Select.prototype._setPopup = function(oPopup) {
	this._oPopup = oPopup;
};

sap.m.Select.prototype._setPopupType = function(sPopupType) {
	this._sPopupType = sPopupType;
};

sap.m.Select.prototype._getPopupType = function() {
	return this._sPopupType;
};

/* Popover */

sap.m.Select.prototype._initPopup = function() {
	var oPopup = this.getPopup();

	// initialize the pop-up (Popover or Dialog) lazily
	this._setPopup(this._createPopupFactory(this._getPopupType()));

	if (oPopup === this.getPopup()) {
		return;
	}

	//
	this.getPopup().addStyleClass(sap.m.SelectRenderer.CSS_CLASS + "Popup")
					.attachBeforeOpen(this.onBeforeOpen, this)
					.attachAfterOpen(this.onAfterOpen, this)
					.attachBeforeClose(this.onBeforeClose, this)
					.attachAfterClose(this.onAfterClose, this)
					.addEventDelegate({
						onBeforeRendering: this.onBeforeRenderingPopup,
						onAfterRendering: this.onAfterRenderingPopup
					}, this);

	// define a parent-child relationship between the select (parent) and children
	this.setAggregation(this._getPopupType().toLocaleLowerCase(), this.getPopup(), true);
};

sap.m.Select.prototype._createPopover = function() {

	// initialize Popover
	this._oPopover = new sap.m.Popover({
		showHeader: false,
		placement: sap.m.PlacementType.Vertical,
		offsetX: 0,
		offsetY: 0,
		initialFocus: this
	});

	this._decoratePopover(this._oPopover);

	return this._oPopover;
};

sap.m.Select.prototype._decoratePopover = function(oPopover) {
	var self = this;

	// adding additional capabilities to the Popover

	oPopover._removeArrow = function() {
		this._marginTop = 0;
		this._marginLeft = 0;
		this._marginRight = 0;
		this._marginBottom = 0;
		this._arrowOffset = 0;
		this._offsets = ["0 0", "0 0", "0 0", "0 0"];
	};

	oPopover._setPosition = function() {
		this._myPositions = ["begin bottom", "begin center", "begin top", "end center"];
		this._atPositions = ["begin top", "end center", "begin bottom", "begin center"];
	};

	oPopover._setArrowPosition = function() {};

	oPopover._setMinWidth = function(sWidth) {
		this.getDomRef().style.minWidth = sWidth;
	};

	oPopover._setWidth = function(sWidth) {
		var bAutoAdjustWidth = self.getAutoAdjustWidth(),
			bIconOnly = self.getType() === "IconOnly",
			oPopupContentDomRef;

		// set the width of the content
		if (sap.ui.Device.system.desktop || sap.ui.Device.system.tablet) {

			oPopupContentDomRef = this.getContent()[0];

			if (bAutoAdjustWidth) {
				oPopupContentDomRef.setWidth("auto");
				oPopupContentDomRef.getDomRef().style.minWidth = sWidth;
			} else {
				oPopupContentDomRef.setWidth(sWidth);
			}
		}

		if (!bIconOnly) {

			// set the width of the popover
			this.getDomRef().style.minWidth = sWidth;
		}
	};

	oPopover.open = function() {
		return this.openBy(self);
	};
};

sap.m.Select.prototype._onAfterRenderingPopover = function() {
	var sWidth = (this._$Select.outerWidth() / parseFloat(sap.m.BaseFontSize)) + "rem";

	// remove the Popover arrow
	this._oPopover._removeArrow();

	// position adaptations
	this._oPopover._setPosition();

	//
	if (sap.ui.Device.system.phone) {
		this._oPopover._setMinWidth("100%");
	} else {
		this._oPopover._setWidth(sWidth);
	}

	//
	if (!this._bHasParentBar && !this._bHasParentList) {
		this._oPopover.addStyleClass(sap.m.SelectRenderer.CSS_CLASS + "PopupStandalone");
	}
};

/* Dialog */

sap.m.Select.prototype._createDialog = function() {

	// initialize Dialog
	this._oDialog = new sap.m.Dialog({
		stretchOnPhone: true,
		customHeader: new sap.m.Bar({
			contentLeft: new sap.m.Input({
				value: this.getSelectedItem().getText(),
				width: "100%",
				editable: false
			})
		})
	});

	this._oDialog.getAggregation("customHeader").attachBrowserEvent("tap", function() {
		this._oDialog.close();
	}, this);

	return this._oDialog;
};

sap.m.Select.prototype._onBeforeOpenDialog = function() {
	var oHeader = this.getPopup().getCustomHeader();

	oHeader.getContentLeft()[0].setValue(this.getSelectedItem().getText());
};

/* ========================================================== */
/*              end: internal methods and properties          */
/* ========================================================== */


/* =========================================================== */
/*                   begin: lifecycle methods                  */
/* =========================================================== */

/**
 * Initialization hook for the Select.
 *
 * @private
 */
sap.m.Select.prototype.init = function() {
	if (this._bUsePopup) {

		// initialize list
		this._createList();

	} else if (this._bUseCustomSelect) {
		jQuery.sap.require("sap.m.CustomSelect");
		sap.m.Select.prototype.init = undefined;
	}
};

/**
 * Required adaptations before rendering.
 *
 * @private
 */
sap.m.Select.prototype.onBeforeRendering = function() {
	var aItems = this.getItems(),
		oItem = this.getSelectedItem(),
		sKey = this.getSelectedKey();

	this._synchronizeSelectedItemAndKey(oItem, sKey, aItems);

	if (this._bUsePopup) {

		this._clearList();
		this._fillList(aItems);
	} else {
		this._unbindBrowserChangeEvent();
	}

	if (this._bUseCustomSelect) {
		this._onBeforeRenderingCustom();
	}
};

/**
 * Required adaptations after rendering.
 *
 * @private
 */
sap.m.Select.prototype.onAfterRendering = function() {
	var $ParentBar,
		oPopup;

	this._cacheDomRefs();

	this._$HtmlSelect.width("100%");

	if (this._bUseCustomSelect) {
		this._onAfterRenderingCustom();
	}

	if (!this._bUsePopup) {
		return;
	}

	// whether the select has a bar or a list as a parent
	$ParentBar = this._$Select.closest(".sapMBar-CTX");

	// whether the select has a Bar as parent
	this._bHasParentBar = !!$ParentBar.length;

	// whether the select has a List as parent
	this._bHasParentList = !!this._$Select.closest(".sapMLIB-CTX").length;

	//
	this._sParentCTX = sap.m.SelectRenderer.CSS_CLASS + "Popup" + ($ParentBar.hasClass("sapMHeader-CTX") ? "Header-CTX" : "Footer-CTX");

	//
	this._setPopupType(sap.ui.Device.system.phone && !this._bHasParentBar ? "Dialog" : "Popover");

	oPopup = this.getPopup();

	// before re-render the pop-up, ensure that the DOM location could be determined
	if (oPopup && oPopup.getDomRef()) {

		if (this.isOpen() && !this.hasContent()) {
			this.close();
		} else {

			// trigger an async re-rendering of the pop-up after the select is rendered
			jQuery.sap.delayedCall(0, oPopup, "rerender");
		}
	}

	// register a listener to the browser change event
	this._$HtmlSelect.on("change." + sap.m.SelectRenderer.CSS_CLASS, jQuery.proxy(this._handleBrowserChangeEvent, this));
};


/**
 * This hook method is called before the Select Pop-up is render.
 *
 * @protected
 * @name sap.m.Select#onBeforeRenderingPopup
 */
sap.m.Select.prototype.onBeforeRenderingPopup = function() {
	var fnOnBeforeRenderingPopupType = this["_onBeforeRendering" + this._getPopupType()];

	this._removeFocusableContent(this._getParentPopup());

	fnOnBeforeRenderingPopupType && fnOnBeforeRenderingPopupType.call(this);
};

/**
 * This hook method is called after the select Pop-up is render.
 *
 * @protected
 * @name sap.m.Select#onAfterRenderingPopup
 */
sap.m.Select.prototype.onAfterRenderingPopup = function() {
	var fnOnAfterRenderingPopupType = this["_onAfterRendering" + this._getPopupType()];

	this._addFocusableContent(this._getParentPopup());

	fnOnAfterRenderingPopupType && fnOnAfterRenderingPopupType.call(this);
};

/**
 * Cleans up before destruction.
 *
 * @private
 */
sap.m.Select.prototype.exit = function() {
	this._unbindBrowserChangeEvent();

	if (this._oList) {
		this._oList.destroy();
		this._oList = null;
	}

	if (this._oPopover) {
		this._oPopover = null;

		// the explicit destroy here is not needed
	}

	if (this._oDialog) {
		this._oDialog = null;

		// the explicit destroy here is not needed
	}

	this._destroyDomRefs();
};

/* =========================================================== */
/*                   end: lifecycle methods                    */
/* =========================================================== */


/* =========================================================== */
/*                      begin: event handlers                  */
/* =========================================================== */

/**
 * Handle the touch start event happening on the select.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Select.prototype.ontouchstart = function(oEvent) {

	// for control who need to know if they should handle events from the select control
	oEvent.originalEvent._sapui_handledByControl = true;

	// add the active state to the select HTMLDIVElement container
	this._addActiveState();

	if (!this._bUsePopup || !this.hasContent() || !this.getEnabled()) {
		return;
	}

	// initialize the pop-up lazily
	this._initPopup();
};

/**
 * Handle the touch move event on the select.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Select.prototype.ontouchmove = function(oEvent) {
	if (!this.getEnabled()) {
		return;
	}

	if (this._bUseCustomSelect) {
		this._ontouchmoveCustom(oEvent);
	}
};

/**
 * Handle the touch end event on the select.
 *
 * @private
 */
sap.m.Select.prototype.ontouchend = function() {

	if (!this.getEnabled()) {
		return;
	}

	if (!this._bUsePopup) {

		// remove the active state of the select HTMLDIVElement container
		this._removeActiveState();
		return;
	}

	if (!this.isOpen() || !this.hasContent()) {

		// remove the active state of the select HTMLDIVElement container
		this._removeActiveState();
	}
};

/**
 * Handle the tap event on the select.
 *
 * @param {jQuery.EventObject} oEvent The event object
 * @private
 */
sap.m.Select.prototype.ontap = function() {
	var oPopup = this.getPopup();

	if (!this._bUsePopup || !oPopup || !this.getEnabled()) {
		return;
	}

	if (this.isOpen()) {
		this.close();
		this._removeActiveState();
		return;
	}

	if (this.hasContent()) {
		this.open(true);
	}

	if (this.isOpen()) {

		// add the active state to the select HTMLDIVElement container
		this._addActiveState();
	}
};

sap.m.Select.prototype.onmousedown = function(oEvent) {

	// for Popup so it will not bring any containing Dialogs to front, overlapping the Select popup
	oEvent.originalEvent._sapui_preventBringToFront = true;
};

/**
 * Handle the change event on the select.
 *
 * @private
 */
sap.m.Select.prototype._handleBrowserChangeEvent = function() {
	var $NewSeletedOption = this._$Options.filter(":selected"),
		sOptionId = $NewSeletedOption[0].id,
		oSelectedItem = this.getSelectedItem();

	if (!oSelectedItem || oSelectedItem.getId() === sOptionId) {
		return;
	}

	this._updateSelectedOption($NewSeletedOption);
	this._updateSelectedItem(sap.ui.getCore().byId(sOptionId));
};

/**
 * Handle the selection change event on the List.
 *
 * @private
 */
sap.m.Select.prototype._handleSelectionChangeEvent = function(oControlEvent) {
	var oNewSelectedItem = this._findMappedItem(oControlEvent.getParameter("listItem"));

	jQuery.sap.assert(oNewSelectedItem, "The corresponding mapped item was not found on " + this);

	this.close();

	if (oNewSelectedItem) {

		if (this._isRequiredSelectElement()) {

			// update the selected option
			this._updateSelectedOption(oNewSelectedItem.$());
		}

		// update the selected item
		this._updateSelectedItem(oNewSelectedItem);
	}
};

/* ----------------------------------------------------------- */
/* Keyboard handling                                           */
/* ----------------------------------------------------------- */

/**
 * Handle when F4 or Alt + DOWN arrow are pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapshow = function(oEvent) {

	// note: prevent browser address bar to be open in ie9, when F4 is pressed
	if (oEvent.keyCode === jQuery.sap.KeyCodes.F4) {
		oEvent.preventDefault();
	}

	if (!this._bUsePopup) {
		return;
	}

	if (this.isOpen()) {
		this.close();
		return;
	}

	if (this.hasContent()) {
		this.open(true);
	}
};

/**
 * Handle when Alt + UP arrow are pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsaphide = sap.m.Select.prototype.onsapshow;

/**
 * Handle when escape is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapescape = function() {
	this.close();
};

/**
 * Handle when enter is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapenter = function() {
	this.close();
};

/**
 * Handle when keyboard DOWN arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapdown = function(oEvent) {

	if (oEvent.type === "sapdown") {

		// note: prevent document scrolling when arrow keys are pressed
		oEvent.preventDefault();
	}

	var aItems,
		oItem,
		iIndexOfSelectedItem = this.indexOfItem(this.getSelectedItem()),
		oLastItem = this._findLastEnabledItem(this.getItems()),
		iIndexOfLastItem = this.indexOfItem(oLastItem);

	// if the current selected item it the last one, do nothing
	if (iIndexOfSelectedItem === iIndexOfLastItem) {
		return;
	}

	aItems = this.getItems().splice(iIndexOfSelectedItem + 1);
	oItem = this._findFirstEnabledItem(aItems);

	if (oItem) {
		this._setSelectedItem(oItem, oItem.getId(), oItem.getKey(), true);
		this._scrollListItemIntoView(false);
		this._setValue(oItem.getText());

		// fire the change event
		this.fireChange({ selectedItem: oItem });
	}
};

/**
 * Handle when keyboard RIGHT arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapright = sap.m.Select.prototype.onsapdown;

/**
 * Handle when keyboard UP arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapup = function(oEvent) {

	if (oEvent.type === "sapup") {

		// note: prevent document scrolling when arrow keys are pressed
		oEvent.preventDefault();
	}

	var aItems,
		oItem,
		iIndexOfSelectedItem = this.indexOfItem(this.getSelectedItem()),
		oFirstItem = this._findFirstEnabledItem(this.getItems()),
		iIndexOfFirstItem = this.indexOfItem(oFirstItem);

	// if the current selected item it the first one, do nothing
	if (iIndexOfSelectedItem === iIndexOfFirstItem) {
		return;
	}

	aItems = this.getItems().splice(0, iIndexOfSelectedItem);
	oItem = this._findLastEnabledItem(aItems);

	if (oItem) {
		this._setSelectedItem(oItem, oItem.getId(), oItem.getKey(), true);
		this._scrollListItemIntoView(true);
		this._setValue(oItem.getText());

		// fire the change event
		this.fireChange({ selectedItem: oItem });
	}
};

/**
 * Handle when keyboard LEFT arrow is pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapleft = sap.m.Select.prototype.onsapup;

/**
 * Handle Home key pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsaphome = function(oEvent) {

	// note: prevent document scrolling when Home key is pressed
	oEvent.preventDefault();

	var oItem = this._findFirstEnabledItem(this.getItems());

	if (oItem) {
		this._setSelectedItem(oItem, oItem.getId(), oItem.getKey(), true);
		this._scrollListItemIntoView();
		this._setValue(oItem.getText());

		// fire the change event
		this.fireChange({ selectedItem: oItem });
	}
};

/**
 * Handle End key pressed.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.m.Select.prototype.onsapend = function(oEvent) {

	// note: prevent document scrolling when End key is pressed
	oEvent.preventDefault();

	var oItem = this._findLastEnabledItem(this.getItems());

	if (oItem) {
		this._setSelectedItem(oItem, oItem.getId(), oItem.getKey(), true);
		this._scrollListItemIntoView();
		this._setValue(oItem.getText());

		// fire the change event
		this.fireChange({ selectedItem: oItem });
	}
};

/* ============================================================ */
/*                      end: event handlers                     */
/* ============================================================ */


/* =========================================================== */
/*                   begin: API method                         */
/* =========================================================== */

/* ----------------------------------------------------------- */
/* protected methods                                           */
/* ----------------------------------------------------------- */

/**
 * This hook method can be used to add additional content.
 *
 * @param {sap.m.Dialog | sap.m.Popover} [oPopup]
 * @protected
 * @name sap.m.Select#addContent
 */
sap.m.Select.prototype.addContent = function(oPopup) {};

/**
 * Getter for the pop-up.
 *
 * @return {sap.m.Dialog | sap.m.Popover | null}
 * @protected
 */
sap.m.Select.prototype.getPopup = function() {
	return this._oPopup || null;
};

/**
 * Determines whether the select has content or not.
 *
 * @return {boolean}
 * @protected
 */
sap.m.Select.prototype.hasContent = function() {
	return !!this.getItems().length;
};

/* ----------------------------------------------------------- */
/* public methods                                              */
/* ----------------------------------------------------------- */

/**
 * Setter for association <code>selectedItem</code>.
 *
 * @param {string | sap.ui.core.Item | null} vSelectedItem new value for association <code>selectedItem</code>
 *    Id of an sap.ui.core.Item which becomes the new target of this <code>selectedItem</code> association.
 *    Alternatively, an sap.ui.core.Item instance may be given.
 * @return {sap.m.Select} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.Select#setSelectedItem
 * @function
 */
sap.m.Select.prototype.setSelectedItem = function(vItem) {
	var sItemId,
		sKey;

	if (typeof vItem === "string") {
		vItem = sap.ui.getCore().byId(vItem);
	}

	if (!(vItem instanceof sap.ui.core.Item) && vItem !== null) {
		jQuery.sap.log.warning('Warning: setSelectedItem() "vItem" has to be an instance of sap.ui.core.Item, a valid sap.ui.core.Item id, or null on', this);
		return this;
	}

	sItemId =  vItem ? vItem.getId() : "";
	sKey = vItem ? vItem.getKey() : "";

	/*
	 * Update and synchronize "selectedItem" association,
	 * "selectedKey" and "selectedItemId" properties.
	 * Re-rendering is needed.
	 */
	this._setSelectedItem(vItem || null, sItemId, sKey, false);

	return this;
};

/**
 * Setter for property <code>selectedItemId</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>.
 *
 * @param {string | sap.ui.core.Item | undefined} sSelectedItemId new value for property <code>selectedItemId</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.12
 * @name sap.m.Select#setSelectedItemId
 * @function
 */
sap.m.Select.prototype.setSelectedItemId = function(sItem) {
	var oItem = sap.ui.getCore().byId(sItem),
		sItemId,
		sKey;

	if (!(oItem instanceof sap.ui.core.Item) && sItem !== "" && sItem !== undefined) {
		jQuery.sap.log.warning('Warning: setSelectedItemId() "sItem" has to be a string id of an sap.ui.core.Item instance, an empty string or undefined on', this);
		return this;
	}

	oItem = oItem || null;
	sItemId = sItem || "";
	sKey = oItem ? oItem.getKey() : "";

	/*
	 * Update and synchronize "selectedItem" association,
	 * "selectedKey" and "selectedItemId" properties.
	 * Re-rendering is needed.
	 */
	this._setSelectedItem(oItem, sItemId, sKey, false);

	return this;
};

/**
 * Setter for property <code>selectedKey</code>.
 *
 * Default value is an empty string <code>""</code> or <code>undefined</code>.
 *
 * @param {string} sSelectedKey new value for property <code>selectedKey</code>.
 * @return {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.11
 * @name sap.m.Select#setSelectedKey
 * @function
 */
sap.m.Select.prototype.setSelectedKey = function(sKey) {

	/*
	 * note: the "selectedItem" association and "selectedItemId" property
	 * need to be updated in onBeforeRendering(), because when this method
	 * is called, the aggregation "items" may be outdated.
	 */
	return this.setProperty("selectedKey", sKey);	// update "selectedKey" property, re-rendering is needed
};

/**
 * Retrieves the item from the aggregation named <code>items</code> at the given 0-based index.
 *
 * @param {int} iIndex Index of the item to return.
 * @return {sap.ui.core.Item | null} Item at the given index, or null if none.
 * @public
 * @since 1.16
 * @name sap.m.Select#getItemAt
 * @function
 */
sap.m.Select.prototype.getItemAt = function(iIndex) {
	return this.getItems()[+iIndex] || null;
};

/**
 * Retrieves the selected item from the aggregation named <code>items</code>.
 *
 * @return {sap.ui.core.Item} The current target of the <code>selectedItem</code> association,  or null.
 * @public
 * @name sap.m.Select#getSelectedItem
 * @function
 */
sap.m.Select.prototype.getSelectedItem = function() {
	var sSelectedItemId = this.getAssociation("selectedItem");

	return (sSelectedItemId === null) ? null : sap.ui.getCore().byId(sSelectedItemId);
};

/**
 * Retrieves the first item from the aggregation named <code>items</code>.
 *
 * @return {sap.ui.core.Item | null} The first item, or null if there are no items.
 * @public
 * @since 1.16
 * @name sap.m.Select#getFirstItem
 * @function
 */
sap.m.Select.prototype.getFirstItem = function() {
	return this.getItems()[0] || null;
};

/**
 * Retrieves the last item from the aggregation named <code>items</code>.
 *
 * @return {sap.ui.core.Item | null} The last item, or null if there are no items.
 * @public
 * @since 1.16
 * @name sap.m.Select#getLastItem
 * @function
 */
sap.m.Select.prototype.getLastItem = function() {
	var aItems = this.getItems();

	return aItems[aItems.length - 1] || null;
};

/**
 * Retrieves the first item object from the aggregation named <code>items</code>,
 * based on the item key value supplied.
 *
 * @param {string} sKey An item key that specifies the item to retrieve.
 * @return {sap.ui.core.Item | null}
 * @public
 * @since 1.16
 * @name sap.m.Select#getItemByKey
 * @function
 */
sap.m.Select.prototype.getItemByKey = function(sKey) {
	for (var i = 0, aItems = this.getItems(); i < aItems.length; i++) {
		if (aItems[i].getKey() === sKey) {
			return aItems[i];
		}
	}

	return null;
};

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.ui.core.Item} vItem the item to remove or its index or id.
 * @return {sap.ui.core.Item} the removed item or null.
 * @public
 * @name sap.m.Select#removeItem
 * @function
 */
sap.m.Select.prototype.removeItem = function(vItem) {
	var oItem;

	// remove the item
	vItem = this.removeAggregation("items", vItem);

	// if the removed item is selected
	if (vItem && vItem.getId() === this.getAssociation("selectedItem")) {

		oItem = this._findFirstEnabledItem(this.getItems());

		if (oItem) {
			this._setSelectedItem(oItem, oItem.getId(), oItem.getKey());
		}
	}

	return vItem;
};

/**
 * Checks if the select is open. It returns true when the select is currently open,
 * this includes opening and closing animations, otherwise it returns false.
 *
 * @return {boolean} Determines whether the menu is currently open (this includes opening and closing animations).
 * @public
 * @since 1.16
 * @name sap.m.Select#isOpen
 * @function
 */
sap.m.Select.prototype.isOpen = function() {
	var oPopup = this.getPopup();

	return !!(oPopup && oPopup.isOpen());
};

/**
 * Open the select.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.16
 * @name sap.m.Select#open
 * @function
 */
sap.m.Select.prototype.open = function(/* only for internal uses */ bSuppressScrollIntoView) {

	if (!bSuppressScrollIntoView && sap.ui.Device.system.desktop) {
		this._$Select[0].scrollIntoView();
	}

	// initialize the pop-up lazily
	this._initPopup();

	// open
	this.getPopup().open();

	return this;
};

/**
 * Closes the select.
 *
 * @return {sap.m.Select} <code>this</code> to allow method chaining.
 * @public
 * @since 1.16
 * @name sap.m.Select#close
 * @function
 */
sap.m.Select.prototype.close = function() {
	var oPopup = this.getPopup();

	oPopup && oPopup.close();

	return this;
};

/* =========================================================== */
/*                     end: API method                         */
/* =========================================================== */