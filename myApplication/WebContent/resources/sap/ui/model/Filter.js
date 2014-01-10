/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.ui.model.Filter");jQuery.sap.require("sap.ui.model.FilterOperator");sap.ui.base.Object.extend("sap.ui.model.Filter",{constructor:function(p,o,v,V){if(typeof p==="object"&&!jQuery.isArray(p)){var f=p;this.sPath=f.path;this.sOperator=f.operator;this.oValue1=f.value1;this.oValue2=f.value2;this.aFilters=f.aFilters;this.bAnd=f.bAnd}else{if(jQuery.isArray(p)){this.aFilters=p}else{this.sPath=p}if(jQuery.type(o)==="boolean"){this.bAnd=o}else{this.sOperator=o}this.oValue1=v;this.oValue2=V}if(jQuery.isArray(this.aFilters)&&this.bAnd!=undefined&&!this.sPath&&!this.sOperator&&!this.oValue1&&!this.oValue2){this._bMultiFilter=true;jQuery.each(this.aFilters,function(i,F){if(!(F instanceof sap.ui.model.Filter)){jQuery.sap.log.error("Filter in Aggregation of Multi filter has to be instance of sap.ui.model.Filter")}})}else if(!this.aFilters&&!this.bAnd&&this.sPath&&this.sOperator&&this.oValue1!==undefined){this._bMultiFilter=false}else{jQuery.sap.log.error("Wrong parameters defined for filter.")}}});
