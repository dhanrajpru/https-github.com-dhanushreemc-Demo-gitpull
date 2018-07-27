 // require('../page/account_info.js');

 var login = function(){

	 this.username = function(value){
		  element(by.id('eml')).sendKeys(value);
	 };
	  this.passwordfield = function(value){
		  element(by.id('passdLogin')).sendKeys(value);
	 }; 
	this.remeberMe = function(){
		 
		 element(by.id('loginRemember')).click();
	};
	this.login_in = function(){
		 element(by.id('accountLogin')).click();
	};
	this.createAnAccount = function(){
		element(by.id('loginCreate')).click();
	};
	this.Forgot = function(){
		element(by.id('loginForget')).click();
	};
	this.helpbutton = function(){
		element(by.id('loginHelp')).click();
	};
	
 };
 
 module.exports = new login();