 // require('../page/account_info.js');

 var mfatext = function(){

	this.temIdCode = function(value){
		  element(by.id('temIdCode')).sendKeys(value);
	 };	
 };
 
 module.exports = new mfatext();