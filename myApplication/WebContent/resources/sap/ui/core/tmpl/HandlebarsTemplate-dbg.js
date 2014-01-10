/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
/*global Handlebars *///declare unusual global vars for JSLint/SAPUI5 validation

jQuery.sap.declare("sap.ui.core.tmpl.HandlebarsTemplate");
jQuery.sap.require("sap.ui.core.tmpl.Template");
jQuery.sap.require("sap.ui.thirdparty.handlebars");


/**
 * Creates and initializes a new handlebars template with the given <code>sId</code> 
 * and settings.
 * 
 * The set of allowed entries in the <code>mSettings</code> object depends on
 * the concrete subclass and is described there. 
 * 
 * @param {string}
 *            [sId] optional id for the new template; generated automatically if
 *            no non-empty id is given Note: this can be omitted, no matter
 *            whether <code>mSettings</code> will be given or not!
 * @param {object}
 *            [mSettings] optional map/JSON-object with initial settings for the
 *            new component instance
 * @public
 * 
 * @class The class for Handlebars Templates.
 * @extends sap.ui.base.ManagedObject
 * @abstract
 * @author SAP
 * @version 1.16.3
 * @name sap.ui.core.tmpl.HandlebarsTemplate
 * @experimental Since 1.15.0. The Template concept is still under construction, so some implementation details can be changed in future.
 */
sap.ui.core.tmpl.Template.extend("sap.ui.core.tmpl.HandlebarsTemplate", /** @lends sap.ui.core.tmpl.HandlebarsTemplate */
{
	
	constructor : function(sId, mSettings) {
		sap.ui.core.tmpl.Template.apply(this, arguments);
	}

});


// register this template type (as it is the default we do it also in the Template)
sap.ui.core.tmpl.Template.registerType("text/x-handlebars-template", "sap.ui.core.tmpl.HandlebarsTemplate");


/**
 * Handlebars helpers for the rendering phase!
 * @private
 */
sap.ui.core.tmpl.HandlebarsTemplate.RENDER_HELPERS = (function() {

	// TODO: ERROR HANDLING!!!
	// TODO: implement support for "if", "unless", "with", ...

	// extended helpers:
	//   - each
	//   - with   (TODO)
	//   - if     (TODO)
	//   - unless (TODO)
	
	// custom helpers:
	//   - control: allows to declare a UI5 control
	//   - element
	//   - attribute
	//   - property
	//   - aggregation

	// define the options to render the properties, aggregations, events, ...
	var fnEach = Handlebars.helpers["each"],
	    fnWith = Handlebars.helpers["with"],
	    fnIf = Handlebars.helpers["if"],
	    fnUnless = Handlebars.helpers["unless"],
	    fnParsePath = sap.ui.core.tmpl.Template.parsePath;
	    
	var oHelpers = {
		
		"each": function(context, options) {
			options = options || context;
			if (!options.hash.path) {
				// call the original function
				return fnEach.apply(this, arguments);
			} else {
				
				// parse the path & find the model
				var oRM = options.data.renderManager,
				    oRootControl = options.data.rootControl,
				    sParentPath = options.data.path,
				    oParentControl = options.data.parentControl,
				    sPath = (jQuery.sap.startsWith(options.hash.path, "/") ? "" : (sParentPath || "")) + options.hash.path,
				    oProperty = oRootControl.bindList(sPath),
				    aHTML = [],
				    data;
				
				// frame the data (isolation)
				if (options.data) {
					data = Handlebars.createFrame(options.data);
				}
			  
				// iterate through the entries of the property
				if (oProperty) {
					jQuery.each(oProperty, function(sKey, oValue) {
						if (data) {
							data.renderManager = oRM;
							data.rootControl = oRootControl;
							data.path = sPath + "/" + sKey + "/";
							data.parentControl = oParentControl;
						}
						// pass the current value as context to allow nested 
						// usage of the standard placeholders 
						//aHTML.push(options.fn(oValue, { data: data }));
						// we do not pass a context since the expressions for UI5 are 
						// based on the models
						aHTML.push(options.fn({}, { data: data }));
					});
				}
					
				// let's return the markup
				if (!oParentControl) {
					return new Handlebars.SafeString(aHTML.join(""));
				}
				
			}
		},
		
		"with": function(context, options) {
			options = options || context;
			if (!options.hash.path) {
				// call the original function
				return fnWith.apply(this, arguments);
			} else {
			}	
		},
		
		"if": function(conditional, options) {
			options = options || conditional;
			if (!options.hash.path) {
				// call the original function
				return fnIf.apply(this, arguments);
			} else {
			}	
		},
		
		"unless": function(conditional, options) {
			options = options || conditional;
			if (!options.hash.path) {
				// call the original function
				return fnUnless.apply(this, arguments);
			} else {
			}	
		},
		
		"text": function(context, options) {
			options = options || context;
			
			// lookup the required infos
			var oRootControl = options.data.rootControl,
	        sParentPath = options.data.path,
	        sPath = (jQuery.sap.startsWith(options.hash.path, "/") ? "" : (sParentPath || "")) + options.hash.path;
			
			// only in case of a path is specified the handler can work
			if (sPath) {
				// bind and return the text
				var oValue = oRootControl.bindProp(sPath);
				return oValue && new Handlebars.SafeString(oValue);
			} else {
				throw new Error("The expression \"text\" requires the option \"path\"!");
			}

		},
			
		"element": function(context, options) {
			options = options || context;
			
			// create and return the DOM element
			var oRM = options.data.renderManager,
			    oRootControl = options.data.rootControl,
			    oElement = oRootControl.createDOMElement(options.hash, options.data.path),
			    oParentElement = options.data.parentElement;

			// Example for defining nested elements:
			// {{#element ...}}
			//   {{element ...}}   <-- nested element
			// {{/element}} 
			if (options.fn) {
				var oChild = options.fn({}, {
					data: {
						renderManager: oRM,
						rootControl: oRootControl,
						parentElement: oElement
					}
				});
			}
			
			// in case of having a parent DOM element, we add the DOM element to 
			// the parent and do not return an HTML string
			if (oParentElement) {
				oParentElement.addElement(oElement);
				return;
			}
			
			// create the HTML markup and return it
			return new Handlebars.SafeString(oRM.getHTML(oElement));
			
		},
			
		"control": function(context, options) {
			options = options || context;
			
			// extract the data information
			var oRM = options.data.renderManager,
			    oControl = options.data.control;
			
			// aggregation support to render the control only (to support markup)
			// e.g.:
			// {{#aggregation name="content" type="sap.ui.core.Control" multiple="true"}}
			//   <div>
			//   {{control}}     <== place where to render the control!
			//   </div>
			// {{/aggregation}}
			if (oControl) {
				return new Handlebars.SafeString(oRM.getHTML(oControl));
			}
			
			// extract the rest of the information which is required now
			var oRootControl = options.data.rootControl,
			    sParentPath = options.data.path,
			    oParentControl = options.data.parentControl,
			    sAggregation = options.hash["sap-ui-aggregation"],
			    sDefaultAggregation = options.data.defaultAggregation,
			    oView = options.data.view;
			
			// create the new control (out of the hash information)
			var oNewControl = oRootControl.createControl(options.hash, options.data.path, !!oParentControl, oView);
			
			// Nested controls will get the reference to the parent control in order
			// to add them to the defined aggregation. Example of nested controls:
			// {{#control ...}}
			//   {{control ...}}   <-- nested control
			// {{/control}} 
			if (options.fn) {
				var oChild = options.fn({}, {
					data: {
						rootControl: oRootControl,
						path: sParentPath,
						parentControl: oNewControl,
						defaultAggregation: options.hash["sap-ui-default-aggregation"] || oNewControl.getMetadata().getDefaultAggregationName(),
						view: oView
					}
				});
			}
			
			// if we find a parent control reference the control will not return 
			// the markup - furthermore the control will add itself to the parent
			// into the desired aggregation
			if (oParentControl) {
				var oMetadata = oParentControl.getMetadata(),
				    sAggrationName = sAggregation || sDefaultAggregation,
				    oAggregation = oMetadata.getAllAggregations()[sAggrationName],
				    bMultiple = oAggregation && oAggregation.multiple;
				if (oAggregation) {
					if (bMultiple) {
						oParentControl.addAggregation(sAggrationName, oNewControl);
					} else {
						oParentControl.setAggregation(sAggrationName, oNewControl);
					}
				} else {
					throw new Error("Aggregation '" + sAggrationName + "' does not exist for Control '" + oMetadata.getName() + "'.");
				}
				return;
			}
			
			// in case of the root control we return the markup
			return new Handlebars.SafeString(oRM.getHTML(oNewControl));
			
		},
		
		"property": function(context, options) {
			options = options || context;
			
			// use the getter to access the property
			var oRootControl = options.data.rootControl,
			    oMetadata = oRootControl.getMetadata(),
			    sPropertyName = options.hash.name,
			    sGetter = oMetadata.getAllProperties()[sPropertyName]._sGetter;
			return oRootControl[sGetter]();
			
		},
		
		"aggregation": function(context, options) {
			options = options || context;
			
			// extract the required info
			var oRM = options.data.renderManager,
	        oRootControl = options.data.rootControl,
	        oMetadata = oRootControl.getMetadata(),
	        sAggregationName = options.hash.name,
	        sGetter = oMetadata.getAllAggregations()[sAggregationName]._sGetter,
	        aHTML = [];
			
			// retrieve the child elements via the specific getter
			// and create the markup for the nested elements
			var aChildren = oRootControl[sGetter]();
			if (aChildren) {
				for (var i = 0, l = aChildren.length; i < l; i++) {
					// if the aggregation contains nested content => execute it!
					if (options.fn) {
						aHTML.push(options.fn({}, {
							data: {
								renderManager: oRM,
							  rootControl: oRootControl,
								control: aChildren[i]
							}
						}));
					} else {
						// simply render the control
						aHTML.push(oRM.getHTML(aChildren[i]));
					}
				}
			}
			
			// return the markup
			return new Handlebars.SafeString(aHTML.join(""));
			
		},
		
		"event": function(context, options) {
			options = options || context;
		}
			
	};
	return oHelpers;

}());



sap.ui.core.tmpl.HandlebarsTemplate.prototype.createMetadata = function() {

	// compile the template 
	// (TODO - think about avoid to compile the template multiple times)
	var sTemplate = this.getContent(),
	    fnTemplate = this._fnTemplate = this._fnTemplate || Handlebars.compile(sTemplate);
	
	// identify the control metadata: properties, aggregations, ... 
	// the template will be executed with specific options
	var oMetadata = {},
	    mJSONKeys = sap.ui.core.tmpl.TemplateControl.getMetadata().getJSONKeys(),
	    mPrivateAggregations = sap.ui.core.tmpl.TemplateControl.getMetadata().getAllPrivateAggregations();
	
	// the options to identify the properties, aggregations, events, ...
	var oHelpers = {
		"property": function(context, options) {
			options = options || context;
			// identify the property and register non standard properties (anything else than id, style, class)
			var sName = options.hash.name;
			if (sName && sName !== "id" && !mJSONKeys[sName]) {
				oMetadata.properties = oMetadata.properties || {};
				oMetadata.properties[sName] = jQuery.extend({}, {type: "string"}, options.hash);
			} else {
				throw new Error("The property name \"" + sName + "\" is reserved.");
			}
		},
		"aggregation": function(context, options) {
			options = options || context;
			// identify the aggregations and register non standard aggregations (anything else than tooltip, customData, layoutData)
			var sName = options.hash.name;
			if (sName && !mJSONKeys[sName] && !mPrivateAggregations[sName]) {
				options.hash.multiple = options.hash.multiple == "true"; // type correction
				oMetadata.aggregations = oMetadata.aggregations || {};
				oMetadata.aggregations[sName] = jQuery.extend({}, options.hash);
			} else {
				throw new Error("The aggregation name \"" + sName + "\" is reserved.");
			}
		},
		"event": function(context, options) {
			options = options || context;
		}
	};
	
	// ignore the following block helper
	jQuery.each(["each", "if", "unless", "with"], function(iIndex, sValue) {
		oHelpers[sValue]= function() {}; 
	});
	
	// execute the templates with the above options
	fnTemplate({}, {
		helpers: oHelpers
	});
	
	// return the new control metadata
	return oMetadata;

};


sap.ui.core.tmpl.HandlebarsTemplate.prototype.createRenderer = function(oView) {
	
	// compile the template 
	// (TODO - think about avoid to compile the template multiple times)
	var sTemplate = this.getContent(),
	    fnTemplate = this._fnTemplate = this._fnTemplate || Handlebars.compile(sTemplate);
	
	// create the renderer for the control
	var fnRenderer = function(rm, oControl) {
		
		// execute the template with the above options
		var sHTML = fnTemplate(oControl.getContext() || {}, {
			data: {
				renderManager: rm,
				rootControl: oControl,
				view: oView
			},
			helpers: sap.ui.core.tmpl.HandlebarsTemplate.RENDER_HELPERS
		});
		
		// write the markup
		rm.write(sHTML);
		
	};
	
	return fnRenderer;
	
};