/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.PopoverRenderer");

/**
 * @class Popover renderer. 
 * @static
 */
sap.m.PopoverRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.m.PopoverRenderer.render = function(rm, oControl){ 
	var aClassNames,
		oSubHeader = oControl.getSubHeader();
	
	if(oSubHeader){
		oSubHeader._context = "header";
	}
	
	//container
	rm.write("<div");
	rm.writeControlData(oControl);
	rm.writeAttribute("tabIndex", "-1");
	
	aClassNames= this.generateRootClasses(oControl);
	aClassNames.forEach(function(sClassName, index){
		rm.addClass(sClassName);
	});
	rm.writeClasses();
	
	var sTooltip = oControl.getTooltip_AsString();
	if (sTooltip) {
		rm.writeAttributeEscaped("title", sTooltip);
	}
	rm.write(">");

	this.renderContent(rm, oControl);

	rm.write("</div>");// container
};

sap.m.PopoverRenderer.isButtonFooter = function(footer){
	if(footer instanceof sap.m.Bar){
		var aContentLeft = footer.getContentLeft(),
			aContentRight = footer.getContentRight(),
			aContentMiddle = footer.getContentMiddle(),
			bLeftEmpty = (!aContentLeft || aContentLeft.length === 0),
			bRightEmpty = (!aContentRight || aContentRight.length === 0),
			bMiddleTwoButtons = false;

		if(aContentMiddle && aContentMiddle.length ===2){
			if((aContentMiddle[0] instanceof sap.m.Button) && (aContentMiddle[1] instanceof sap.m.Button)){
				bMiddleTwoButtons = true;
			}
		}
		
		return bLeftEmpty && bRightEmpty && bMiddleTwoButtons;
	}else{
		return false;
	}
};

sap.m.PopoverRenderer.renderContent = function(rm, oControl){
	var oHeaderControl,
		sId = oControl.getId(),
		i = 0,
		contents = oControl.getContent(),
		oFooter = oControl.getFooter(),
		oSubHeader = oControl.getSubHeader(),
		sContentWidth = oControl.getContentWidth(),
		sContentHeight = oControl.getContentHeight(),
		sFooterClass = "sapMPopoverFooter ";
	
	if(oControl.getShowHeader()){
		oHeaderControl = oControl._getAnyHeader();
	}
	
	if(jQuery.device.is.desktop) {
		//Invisible element for cycling keyboard navigation
		rm.write("<span id='" + oControl.getId() + "-firstfe' tabIndex='0'></span>");
	}

	if(!jQuery.os.ios && !sap.m.Popover._bOneDesign){
		//arrow
		rm.write("<span");
		rm.writeAttribute("id", sId+"-arrow");
		rm.addClass("sapMPopoverArr");
		rm.writeClasses();
		rm.write("></span>");//arrow tip
	}

	//header
	if(oHeaderControl){
		rm.renderControl(oControl._getAnyHeader().addStyleClass("sapMPopoverHeader sapMPageHeader"));
	}//header
	
	if(oSubHeader){
		rm.renderControl(oSubHeader.addStyleClass("sapMPopoverSubHeader"));
	}
	
	// content container
	rm.write("<div");
	rm.writeAttribute("id",sId + "-cont");
	if(sContentWidth){
		rm.addStyle("width",sContentWidth);
	}
	if(sContentHeight){
		rm.addStyle("height",sContentHeight);
	}
	rm.writeStyles();
	rm.addClass("sapMPopoverCont");
	rm.writeClasses();
	rm.write(">");
	
	//scroll area
	rm.write("<div id='" + oControl.getId() + "-scroll" +"' class='sapMPopoverScroll " +"'>");
	for(i = 0 ; i < contents.length ; i++){
		rm.renderControl(contents[i]);
	}
	rm.write("</div>");//scrollArea
	
	rm.write("</div>");//content container
	
	//footer
	if (oFooter) {
		oFooter._context = 'footer';
		if(this.isButtonFooter(oFooter)){
			sFooterClass += "sapMPopoverSpecialFooter";
		}
		rm.renderControl(oFooter.addStyleClass(sFooterClass));
	}//footer
	
	if(jQuery.os.ios || sap.m.Popover._bOneDesign){
		//arrow
		rm.write("<span");
		rm.writeAttribute("id", sId+"-arrow");
		rm.addClass("sapMPopoverArr");
		rm.writeClasses();
		rm.write("></span>");//arrow tip
	}

	if(jQuery.device.is.desktop) {
		//Invisible element for desktop keyboard navigation
		rm.write("<span id='" + oControl.getId() + "-lastfe' tabIndex='0'></span>");
	}
};

sap.m.PopoverRenderer.generateRootClasses = function(oControl){
	var aClassNames = ["sapMPopover"],
		oSubHeader = oControl.getSubHeader(),
		oFooter = oControl.getFooter(),
		bVerScrollable = oControl.getVerticalScrolling() && !oControl._forceDisableScrolling,
		bHorScrollable = oControl.getHorizontalScrolling() && !oControl._forceDisableScrolling,
		oHeaderControl;
	
	if(oControl.getShowHeader()){
		oHeaderControl = oControl._getAnyHeader();
	}
	
	if(oHeaderControl){
		aClassNames.push("sapMPopoverWithBar");
	}else{
		aClassNames.push("sapMPopoverWithoutBar");
	}
	
	if(oSubHeader){
		aClassNames.push("sapMPopoverWithSubHeader");
	}else{
		aClassNames.push("sapMPopoverWithoutSubHeader");
	}
	
	if(oControl._hasSingleNavContent()){
		aClassNames.push("sapMPopoverNav");
	}
	
	if(oControl._hasSinglePageContent()){
		aClassNames.push("sapMPopoverPage");
	}
	if(oFooter){
		aClassNames.push("sapMPopoverWithFooter");
	}else{
		aClassNames.push("sapMPopoverWithoutFooter");
	}
	
	if(oControl.getPlacement() === sap.m.PlacementType.Top){
		aClassNames.push("sapMPopoverPlacedTop");
	}
	if(!bVerScrollable) {
		aClassNames.push("sapMPopoverVerScrollDisabled");
	}
	if(!bHorScrollable) {
		aClassNames.push("sapMPopoverHorScrollDisabled");
	}
	
	aClassNames.push("sapMPopup-CTX");
	
	return aClassNames;
};

sap.m.PopoverRenderer.rerenderContentOnly = function(oControl){
	var $Popover = oControl.$(),
		oPopoverDomRef = oControl.getDomRef(),
		aClassNames, oRm;
	
	if(!oPopoverDomRef){
		//popover isn't rendered yet, just return
		return;
	}
	
	$Popover.removeClass();
	aClassNames = this.generateRootClasses(oControl);
	$Popover.addClass(aClassNames.join(" "));

	oRm = sap.ui.getCore().createRenderManager();
	this.renderContent(oRm, oControl);
	
	oRm.flush(oPopoverDomRef, true);
	oRm.destroy();
	
	//recalculate the size and position of popover
	oControl._onOrientationChange();
};