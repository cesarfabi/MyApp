/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.Link");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Link",{metadata:{library:"sap.m",properties:{"text":{type:"string",group:"Data",defaultValue:''},"enabled":{type:"boolean",group:"Behavior",defaultValue:true},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"target":{type:"string",group:"Behavior",defaultValue:null},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"href":{type:"sap.ui.core.URI",group:"Data",defaultValue:null}},events:{"press":{allowPreventDefault:true}}}});sap.m.Link.M_EVENTS={'press':'press'};jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.call(sap.m.Link.prototype);
sap.m.Link.prototype._handlePress=function(e){if(this.getEnabled()){if(!this.firePress()){e.preventDefault()}}else{e.preventDefault()}};
if(jQuery.support.touch){sap.m.Link.prototype.ontap=sap.m.Link.prototype._handlePress}else{sap.m.Link.prototype.onclick=sap.m.Link.prototype._handlePress}
sap.m.Link.prototype.ontouchstart=function(e){e.originalEvent._sapui_handledByControl=true};
