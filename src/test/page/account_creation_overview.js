 // require('../page/account_info.js');

 var account_creation_overview = function(){

	this.overViEditOne = function(){
		 
		 element(by.id('overViEditOne')).click();
	};
	this.accOverEditTwo = function(){
		 
		 element(by.id('accOverEditTwo')).click();
	};
	this.createAnAccount = function(){
		element(by.id('agreeTerms')).click();
	};
		this.termsAndAgreement = function(){
		element(by.id('termsAndAgreement')).click();
	};
	
 };
 
 module.exports = new account_creation_overview();