/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.InputBaseRenderer");jQuery.sap.declare("sap.m.InputRenderer");sap.m.InputRenderer=sap.ui.core.Renderer.extend(sap.m.InputBaseRenderer);
sap.m.InputRenderer.addOuterClasses=function(r,c){r.addClass("sapMInput")};
sap.m.InputRenderer.addOuterStyles=function(r,c){if(!c.getWidth()){r.addStyle("width","100%")}};
sap.m.InputRenderer.writeInnerAttributes=function(r,c){r.writeAttribute("type",c.getType().toLowerCase());if((!c.getEnabled()&&c.getType()=="Password")||(c.getShowSuggestion()&&sap.ui.Device.system.phone)){r.writeAttribute("readonly","readonly")}};
sap.m.InputRenderer.addInnerClasses=function(r,c){if(c.getShowValueHelp()&&c.getEnabled()){r.addClass("sapMInputInnerVH")}};
sap.m.InputRenderer.writeInnerContent=function(r,c){if(c.getShowValueHelp()&&c.getEnabled()){r.write('<div class="sapMInputValHelp">');r.renderControl(c._getValueHelpIcon());r.write("</div>")}};
