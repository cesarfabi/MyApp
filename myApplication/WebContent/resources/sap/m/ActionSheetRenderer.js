/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ActionSheetRenderer");sap.m.ActionSheetRenderer={};
sap.m.ActionSheetRenderer.render=function(r,c){var a=c.getButtons(),i,m;for(i=0;i<a.length;i++){if(a[i].getIcon()){m=true;break}}r.write("<div");r.writeControlData(c);r.addClass("sapMActionSheet");if(m){r.addClass("sapMActionSheetMixedButtons")}r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}r.write(">");for(i=0;i<a.length;i++){r.renderControl(a[i].addStyleClass("sapMActionSheetButton"))}if((jQuery.device.is.iphone||(sap.m.Dialog._bOneDesign&&jQuery.device.is.phone))&&c.getShowCancelButton()){r.renderControl(c._getCancelButton())}r.write("</div>")};
