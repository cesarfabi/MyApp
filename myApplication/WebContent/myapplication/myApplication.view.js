sap.ui.jsview("myapplication.myApplication", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myapplication.myApplication
	*/ 
	getControllerName : function() {
		return "myapplication.myApplication";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myapplication.myApplication
	*/ 
	createContent : function(oController) {
		var aControls = []; 
		var oButton = new sap.ui.commons.Button({ id : this.createId("MyButton"), text : "Hello JS View" });
		aControls.push(oButton.attachPress(oController.doIt)); 
		return aControls;
	}

});
