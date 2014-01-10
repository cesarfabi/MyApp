/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ComponentContainer");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.core.ComponentContainer",{metadata:{library:"sap.ui.core",properties:{"name":{type:"string",group:"",defaultValue:null},"url":{type:"sap.ui.core.URI",group:"",defaultValue:null},"settings":{type:"object",group:"",defaultValue:null},"propagateModel":{type:"boolean",group:"",defaultValue:false},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null}},associations:{"component":{type:"sap.ui.core.UIComponent",multiple:false}}}});
sap.ui.core.ComponentContainer.prototype.getComponentInstance=function(){var c=this.getComponent();return sap.ui.getCore().getComponent(c)};
sap.ui.core.ComponentContainer.prototype.setComponent=function(c){var o=this.getComponentInstance();if(o){o.setContainer(undefined)}this.setAssociation("component",c);c=this.getComponentInstance();if(c){c.setContainer(this);this.propagateProperties()}};
sap.ui.core.ComponentContainer.prototype.onBeforeRendering=function(){var c=this.getComponentInstance();if(!c){var n=this.getName();if(n){c=sap.ui.component({name:n,url:this.getUrl(),settings:this.getSettings()});this.setComponent(c)}}if(c&&c.onBeforeRendering){c.onBeforeRendering()}};
sap.ui.core.ComponentContainer.prototype.onAfterRendering=function(){var c=this.getComponentInstance();if(c&&c.onAfterRendering){c.onAfterRendering()}};
sap.ui.core.ComponentContainer.prototype.exit=function(){var c=this.getComponentInstance();if(c){c.destroy()}};
sap.ui.core.ComponentContainer.prototype.propagateProperties=function(n){var c=this.getComponentInstance();if(c&&this.getPropagateModel()){this._propagateProperties(n,c);sap.ui.core.Control.prototype.propagateProperties.apply(this,arguments)}};
