/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ObjectAttribute");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.ObjectAttribute",{metadata:{library:"sap.m",properties:{"visible":{type:"boolean",group:"Appearance",defaultValue:true},"text":{type:"string",group:"Misc",defaultValue:null},"active":{type:"boolean",group:"Misc",defaultValue:null}},events:{"press":{}}}});sap.m.ObjectAttribute.M_EVENTS={'press':'press'};
sap.m.ObjectAttribute.prototype.ontap=function(e){if(!!this.getActive()){this.firePress({domRef:jQuery.sap.domById(this.getId())})}};
sap.m.ObjectAttribute.prototype._isEmpty=function(){return!this.getText().trim()};
