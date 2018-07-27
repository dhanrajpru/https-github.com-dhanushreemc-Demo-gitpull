 // require('../page/account_info.js');

 var accountcreationpersonal = function(){
	
	 this.username = function(value){
		  element(by.id('persUsername')).sendKeys(value);
	 };
	  this.password = function(value){
		  element(by.id('password')).sendKeys(value);
	 };
	 this.firstName = function(value){
		  element(by.id('perFirName')).sendKeys(value);
	 };
	  this.lastname = function(value){
		  element(by.id('perLasName')).sendKeys(value);
	 };
	  this.birthDay = function(value){
		  element(by.id('perDay')).sendKeys(value);
	 };
	  this.birthMonth = function(value){
		 element(by.id('perMonth')).sendKeys(value);
	 };
	  this.birthYear = function(value){
		 element(by.id('perYear')).sendKeys(value);
	 };
	  this.email = function(value){
		  element(by.id('perEmail')).sendKeys(value);
	 };
	 this.countryCode = function(value){
		  element(by.id('percounCode')).sendKeys(value);
	 };
	 this.areacode = function(value){
		  element(by.id('perAreaCode')).sendKeys(value);
	 }; 
	this.phoneNumber = function(value){
		  element(by.id('perPhNumber')).sendKeys(value);
	 };
	 
	 this.perAddOne = function(value){
		  element(by.id('perAddOne')).sendKeys(value);
	 };
	 
	  this.country = function(value){
		  element(by.id('country')).sendKeys(value);
	 };
	  this.zip = function(value){
		  element(by.id('perZip')).sendKeys(value);
	 };
	 
	  this.city = function(value){
		  element(by.id('perCity')).sendKeys(value);
	 };
	 
	   this.state = function(value){
		  element(by.id('perState')).sendKeys(value);
	 };
	 this.isShippingAddressyes = function(){
		 element(by.id('perYes')).click();
	};
	
	 this.isShippingAddressno = function(){
		 element(by.id('perNo')).click();
	};
	this.isShippingAddressperAdd = function(value){
		  element(by.id('perAdd')).sendKeys(value);
	 };
	    this.isShippingAddresscountryOne = function(value){
		  element(by.id('countryTwo')).sendKeys(value);
	 };
	    this.isShippingAddressperZipTwo = function(value){
		  element(by.id('perZipTwo')).sendKeys(value);
	 };
	    this.isShippingAddresscityTwo = function(value){
		  element(by.id('cityTwo')).sendKeys(value);
	 };
	    this.isShippingAddressstateTwo = function(value){
		  element(by.id('stateTwo')).sendKeys(value);
	 };	
	
	this.Next = function(){
		 element(by.id('perNext')).click();
	};
	
 };
 
 module.exports = new accountcreationpersonal();