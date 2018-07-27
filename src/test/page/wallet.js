 // require('../page/account_info.js');

 var wallet = function(){

	 this.zervAddress = function(value){
		  element(by.id('zervAddress')).sendKeys(value);
	 };	
	 this.createAccount = function(){
		 
		 element(by.id('walletCreateAccount')).click();
	 };
	  	
 };
 
 module.exports = new wallet();