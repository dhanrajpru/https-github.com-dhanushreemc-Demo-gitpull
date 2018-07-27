 // require('../page/account_info.js');

 var accountpage = function(){

	 this.accPageId = function(value){
		  element(by.id('accPageId')).sendKeys(value);
	 };
	this.accPageRedeem = function(){
		element(by.id('accPageRedeem')).click();
	};
	
 };
 
 module.exports = new accountpage();