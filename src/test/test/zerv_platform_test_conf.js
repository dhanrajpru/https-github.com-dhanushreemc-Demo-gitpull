var util = require('util');
var waiting = browser.sleep(2000);
var host_name = require('../host/base_host.json');
describe('lOGIN TEST SCENARIO ', function() {
    beforeEach(function() {
        browser.manage().window().maximize();
        browser.get(host_name.loginLink);
		browser.ignoreSynchronization = true;
		browser.manage().timeouts().implicitlyWait(30 * 1000);
    });
	var login = require('../page/login.js');
    it('this should fail due to user name not entered', function() {
		login.passwordfield(host_name.loginDetails.truetest.password);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountPageLink);
    });
	  it('this should fail due to password not entered', function() {
        login.username(host_name.loginDetails.truetest.username);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountPageLink);
     });
	   it('this should fail due to user name and password formate incorrrect', function() {
        login.username(host_name.loginDetails.falsetest.username);
		login.passwordfield(host_name.loginDetails.falsetest.password);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountPageLink);
     });
	  it('this should fail due to user name and password formate is in number', function() {
        login.username(host_name.loginDetails.falsetest.usernamenumber);
		login.passwordfield(host_name.loginDetails.falsetest.passwordnumber);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountPageLink);
     });
	it('this should fail due to user name and password formate is in special char', function() {
		login.username(host_name.loginDetails.falsetest.usernamespl);
		login.passwordfield(host_name.loginDetails.falsetest.passwordspl);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountPageLink);
     });
	  it('This should be able to login', function() {
		login.username(host_name.loginDetails.truetest.username);
		login.passwordfield(host_name.loginDetails.truetest.password);
		login.remeberMe();
		login.login_in();
        expect(browser.getCurrentUrl()).toMatch(host_name.accountPageLink);
    });
	  it('This should perform the action to navigate for creation of account', function() {
		login.createAnAccount();
        expect(browser.getCurrentUrl()).toMatch(host_name.accountcreationpersonalLink);
    });
	it('This should perform the action to navigate for Help page', function() {
		login.helpbutton();
        expect(browser.getCurrentUrl()).toMatch(host_name.helpLink);
    });
	it('This should perform the action to navigate for Forgot Password', function() {
		login.Forgot();
        expect(browser.getCurrentUrl()).toMatch(host_name.forgetpasswordLink);
    });
});  
 describe('ACCOUNT CREATION STEP - 1 TEST SCENARIO ', function() {
beforeEach(function() {
        browser.manage().window().maximize();
        browser.get(host_name.accountcreationpersonalLink);
		browser.ignoreSynchronization = true;
		browser.manage().timeouts().implicitlyWait(30 * 1000);
    });
	var accountcreationpersonal = require('../page/accountcreationpersonal.js');
	   it('this should Create personal information data', function() {		 
        accountcreationpersonal.username(host_name.accountcreationpersonal.truetest.username);
		accountcreationpersonal.password(host_name.accountcreationpersonal.truetest.password);
        accountcreationpersonal.firstName(host_name.accountcreationpersonal.truetest.firstName);
		accountcreationpersonal.lastname(host_name.accountcreationpersonal.truetest.lastname);
		accountcreationpersonal.birthDay(host_name.accountcreationpersonal.truetest.day);
		accountcreationpersonal.birthMonth(host_name.accountcreationpersonal.truetest.month);
		accountcreationpersonal.birthYear(host_name.accountcreationpersonal.truetest.year);
		accountcreationpersonal.email(host_name.accountcreationpersonal.truetest.email);
		accountcreationpersonal.countryCode(host_name.accountcreationpersonal.truetest.countrycode);
		accountcreationpersonal.areacode(host_name.accountcreationpersonal.truetest.areacode);
		accountcreationpersonal.phoneNumber(host_name.accountcreationpersonal.truetest.number);
		accountcreationpersonal.perAddOne(host_name.accountcreationpersonal.truetest.perAddOne);
		accountcreationpersonal.country(host_name.accountcreationpersonal.truetest.country);
		accountcreationpersonal.zip(host_name.accountcreationpersonal.truetest.zip);
		accountcreationpersonal.city(host_name.accountcreationpersonal.truetest.city);
		accountcreationpersonal.state(host_name.accountcreationpersonal.truetest.state);
		accountcreationpersonal.isShippingAddressyes();
		accountcreationpersonal.isShippingAddressno();
		accountcreationpersonal.isShippingAddressperAdd(host_name.accountcreationpersonal.truetest.isShippingAddressperAdd);
		accountcreationpersonal.isShippingAddresscountryOne(host_name.accountcreationpersonal.truetest.isShippingAddresscountryOne);
		accountcreationpersonal.isShippingAddressperZipTwo(host_name.accountcreationpersonal.truetest.isShippingAddressperZipTwo);
		accountcreationpersonal.isShippingAddresscityTwo(host_name.accountcreationpersonal.truetest.isShippingAddresscityTwo);
		accountcreationpersonal.isShippingAddressstateTwo(host_name.accountcreationpersonal.truetest.isShippingAddressstateTwo);
		accountcreationpersonal.Next();
        expect(browser.getCurrentUrl()).toMatch(host_name.accountcreationwalletLink);
     });
	  it('this should not accept any spl or number character', function() {		 
        accountcreationpersonal.username(host_name.accountcreationpersonal.falsetest.username);
		accountcreationpersonal.password(host_name.accountcreationpersonal.falsetest.password);
        accountcreationpersonal.firstName(host_name.accountcreationpersonal.falsetest.firstName);
		accountcreationpersonal.lastname(host_name.accountcreationpersonal.falsetest.lastname);
		accountcreationpersonal.birthDay(host_name.accountcreationpersonal.falsetest.day);
		accountcreationpersonal.birthMonth(host_name.accountcreationpersonal.falsetest.month);
		accountcreationpersonal.birthYear(host_name.accountcreationpersonal.falsetest.year);
		accountcreationpersonal.email(host_name.accountcreationpersonal.falsetest.email);
		accountcreationpersonal.countryCode(host_name.accountcreationpersonal.falsetest.countrycode);
		accountcreationpersonal.areacode(host_name.accountcreationpersonal.falsetest.areacode);
		accountcreationpersonal.phoneNumber(host_name.accountcreationpersonal.falsetest.number);
		accountcreationpersonal.perAddOne(host_name.accountcreationpersonal.falsetest.perAddOne);
		accountcreationpersonal.country(host_name.accountcreationpersonal.falsetest.country);
		accountcreationpersonal.zip(host_name.accountcreationpersonal.falsetest.zip);
		accountcreationpersonal.city(host_name.accountcreationpersonal.falsetest.city);
		accountcreationpersonal.state(host_name.accountcreationpersonal.falsetest.state);
		accountcreationpersonal.isShippingAddressyes();
		accountcreationpersonal.isShippingAddressno();
		accountcreationpersonal.isShippingAddressperAdd(host_name.accountcreationpersonal.falsetest.isShippingAddressperAdd);
		accountcreationpersonal.isShippingAddresscountryOne(host_name.accountcreationpersonal.falsetest.isShippingAddresscountryOne);
		accountcreationpersonal.isShippingAddressperZipTwo(host_name.accountcreationpersonal.falsetest.isShippingAddressperZipTwo);
		accountcreationpersonal.isShippingAddresscityTwo(host_name.accountcreationpersonal.falsetest.isShippingAddresscityTwo);
		accountcreationpersonal.isShippingAddressstateTwo(host_name.accountcreationpersonal.falsetest.isShippingAddressstateTwo);
		accountcreationpersonal.Next();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.accountcreationwalletLink);
     });
}); 

	describe('ACCOUNT CREATION OVERVIEW TEST SCENARIO ', function() {
    beforeEach(function() {
        browser.manage().window().maximize();
        browser.get(host_name.accountcreationoverviewLink);
		browser.manage().timeouts().implicitlyWait(30 * 1000);
    });
	var account_creation_overview = require('../page/account_creation_overview.js');
    it('this should navigate to Personal Information page', function() {
		account_creation_overview.accOverEditTwo();
        expect(browser.getCurrentUrl()).toMatch(host_name.accountcreationpersonalLink);
    });
	  it('this should navigate to Wallet page', function() {
		account_creation_overview.overViEditOne();
        expect(browser.getCurrentUrl()).toMatch(host_name.accountcreationwalletLink);
     });
	   it('this should navigate to Account page', function() {
		account_creation_overview.createAnAccount();
		account_creation_overview.termsAndAgreement();
     });
}); 

 	describe('ACCOUNT PAGE TEST SCENARIO ', function() {
    beforeEach(function() {
        browser.manage().window().maximize();
        browser.get(host_name.accountPageLink);
		browser.manage().timeouts().implicitlyWait(30 * 1000);
    });
	var accountpage = require('../page/accountpage.js');
   
   it('this should accept the givien Amount and redeem it', function() {
		accountpage.accPageId(host_name.accountpage.truetest.accPageId);
		accountpage.accPageRedeem();
        expect(browser.getCurrentUrl()).toMatch(host_name.productcatalogLink);
    });
	  it('this should not accept the givien Amount and redeem it if givien input is not integer ', function() {
		accountpage.accPageId(host_name.accountpage.falsetest.accPageId);
		accountpage.accPageRedeem();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.productcatalogLink);
     });
	   it('this should not navigate if input field is empty', function() {
		accountpage.accPageRedeem();
        expect(browser.getCurrentUrl()).not.toMatch(host_name.productcatalogLink);
     });
});

