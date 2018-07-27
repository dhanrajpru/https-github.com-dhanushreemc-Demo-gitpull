 // require('../page/account_info.js');
 var mfacall = function(){

	this.tempIdCall = function(value){
		  element(by.id('tempIdCall')).sendKeys(value);
	 };	
 };
 
 module.exports = new mfacall();