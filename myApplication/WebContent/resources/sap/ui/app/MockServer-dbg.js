/*
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */

// Provides class sap.ui.app.MockServer for mocking a server
jQuery.sap.declare("sap.ui.app.MockServer");
jQuery.sap.require("sap.ui.core.util.MockServer");

(function() {
	

	/**
	 * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without
	 * changing the application code. This class can also be used for qunit tests.
	 * 
	 * @param {string} [sId] id for the new server object; generated automatically if no non-empty id is given
	 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
	 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
	 * @param {object} [oScope] scope object for resolving string based type and formatter references in bindings
	 * 
	 * @class Class to mock a server
	 * @extends sap.ui.base.ManagedObject
	 * @abstract
	 * @author SAP
	 * @version 1.16.3
	 * @public
	 * @name sap.ui.app.MockServer
	 * @experimental Since 1.13.0. The mock server is still under construction, so some implementation details can be changed in future.
	 * @deprecated Since 1.15.1. The mock server code has been moved to sap.ui.core.util - see {@link sap.ui.core.util.MockServer}
	 */
	sap.ui.app.MockServer = sap.ui.core.util.MockServer;


})();
