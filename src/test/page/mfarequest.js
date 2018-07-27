 // require('../page/account_info.js');

 var mfarequest = function(){

   this.mfaRequestNext = function(){
		 
		 element(by.id('mfaRequestNext')).click();
	 };
	
 };
 
 module.exports = new mfarequest();