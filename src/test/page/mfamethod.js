 // require('../page/account_info.js');

 var mfamethod = function(){

	 this.mfaText = function(){
		 
		 element(by.id('mfaText')).click();
	 };
	   this.mfaCall = function(){
		 
		 element(by.id('mfaCall')).click();
	 };
	    this.emailChoose = function(){
		 
		 element(by.id('emailChoose')).click();
	 };
	   this.mfaChooseMethodSendCode = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
	 };
	
 };
 
 module.exports = new mfamethod();