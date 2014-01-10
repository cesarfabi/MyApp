/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.core.ComponentMetadata");jQuery.sap.require("sap.ui.base.ManagedObjectMetadata");
sap.ui.core.ComponentMetadata=function(c,C){sap.ui.base.ManagedObjectMetadata.apply(this,arguments)};
sap.ui.core.ComponentMetadata.prototype=jQuery.sap.newObject(sap.ui.base.ManagedObjectMetadata.prototype);
sap.ui.core.ComponentMetadata.preprocessClassInfo=function(c){if(c&&typeof c.metadata==="string"){c.metadata={_src:c.metadata}}return c};
sap.ui.core.ComponentMetadata.prototype.applySettings=function(c){var s=c.metadata;sap.ui.base.ManagedObjectMetadata.prototype.applySettings.call(this,c);var n=this.getName(),p=n.replace(/\.\w+?$/,"");if(s._src){jQuery.sap.log.warning("The metadata of the component "+n+" is loaded from file "+s._src+". This is a design time feature and not for productive usage!");var u=jQuery.sap.getModulePath(p,"/"+s._src);var r=jQuery.sap.syncGetJSON(u);if(r.success){jQuery.extend(s,r.data)}else{jQuery.sap.log.error("Failed to load component metadata from \""+s._src+"\"! Reason: "+r.error)}}this._sComponentName=p;this._bInitialized=false;this._iInstanceCount=0;this._sVersion=s.version;this._mDependencies=s.dependencies;this._aIncludes=s.includes;this._mConfig=s.config;this._mCustomizing=s.customizing;this._mModels=s.models||{};this._mServices=s.services||{};var P=this.getParent();if(P instanceof sap.ui.core.ComponentMetadata){this._mConfig=jQuery.extend(true,{},P._mConfig,this._mConfig);this._mCustomizing=jQuery.extend(true,{},P._mCustomizing,this._mCustomizing);this._mModels=jQuery.extend(true,{},P._mModels,this._mModels);this._mServices=jQuery.extend(true,{},P._mServices,this._mServices)}};
sap.ui.core.ComponentMetadata.prototype.init=function(){if(!this._bInitialized){var p=this.getParent();if(p instanceof sap.ui.core.ComponentMetadata){p.init()}this._loadIncludes();this._loadDependencies();this._bInitialized=true}};
sap.ui.core.ComponentMetadata.prototype.exit=function(){if(this._bInitialized){var p=this.getParent();if(p instanceof sap.ui.core.ComponentMetadata){p.exit()}this._bInitialized=false}};
sap.ui.core.ComponentMetadata.prototype.onInitComponent=function(){if(this._iInstanceCount===0&&!jQuery.isEmptyObject(this._mCustomizing)){jQuery.sap.require("sap.ui.core.CustomizingConfiguration");sap.ui.core.CustomizingConfiguration.activateForComponent(this._sComponentName)}this._iInstanceCount++};
sap.ui.core.ComponentMetadata.prototype.onExitComponent=function(){this._iInstanceCount--;if(this._iInstanceCount===0&&!jQuery.isEmptyObject(this._mCustomizing)){if(sap.ui.core.CustomizingConfiguration){sap.ui.core.CustomizingConfiguration.deactivateForComponent(this._sComponentName)}}};
sap.ui.core.ComponentMetadata.prototype.getDependencies=function(){return this._mDependencies};
sap.ui.core.ComponentMetadata.prototype.getIncludes=function(){return(this._aIncludes&&this._aIncludes.length>0)?this._aIncludes:null};
sap.ui.core.ComponentMetadata.prototype.getUI5Version=function(){return this._mDependencies?this._mDependencies.ui5version:null};
sap.ui.core.ComponentMetadata.prototype.getComponents=function(){var c=null;if(this._mDependencies){if(this._mDependencies.components&&(this._mDependencies.components.length>0)){c=this._mDependencies.components}}return c};
sap.ui.core.ComponentMetadata.prototype.getLibs=function(){var l=null;if(this._mDependencies){if(this._mDependencies.libs&&(this._mDependencies.libs.length>0)){l=this._mDependencies.libs}}return l};
sap.ui.core.ComponentMetadata.prototype.getVersion=function(){return this._sVersion};
sap.ui.core.ComponentMetadata.prototype.getConfig=function(k){return this._mConfig?jQuery.extend({},k?this._mConfig[k]:this._mConfig):undefined};
sap.ui.core.ComponentMetadata.prototype.getCustomizing=function(){return this._mCustomizing?jQuery.extend({},this._mCustomizing):undefined};
sap.ui.core.ComponentMetadata.prototype.getModels=function(){return this._mModels};
sap.ui.core.ComponentMetadata.prototype.getServices=function(){return this._mServices};
sap.ui.core.ComponentMetadata.prototype._loadIncludes=function(){var I=this.getIncludes();if(I&&I.length>0){var t=this;var l=this.getLibraryName();jQuery.each(I,function(i,f){if(f.match(/.css$/i)){var c=sap.ui.resource(l,f);jQuery.sap.log.info("Component \""+t.getName()+"\" is loading CSS: \""+c+"\"");jQuery.sap.includeStyleSheet(c)}else{var m=f.match(/.js$/i);if(m){f=f.substring(0,m.index);if(f.substring(0,1)!=='/'){f='/'+f}jQuery.sap.log.info("Component \""+t.getName()+"\" is loading JS: \""+l+f+"\"");jQuery.sap.require(l+f)}}})}};
sap.ui.core.ComponentMetadata.prototype._loadDependencies=function(){var t=this,d=this.getDependencies();if(d){var l=d.libs;if(l){jQuery.each(l,function(i,L){jQuery.sap.log.info("Component \""+t.getName()+"\" is loading library: \""+L+"\"");sap.ui.getCore().loadLibrary(L)})}var c=d.components;if(c){jQuery.each(c,function(i,n){jQuery.sap.log.info("Component \""+t.getName()+"\" is loading component: \""+n+".Component\"");jQuery.sap.require(n+".Component")})}}};
