exports.config = {
 directConnect: true,

 // Capabilities to be passed to the webdriver instance.
 capabilities: {
   'browserName': 'chrome',
   chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
   }
 },

 
 // Framework to use. Jasmine is recommended.
 framework: 'jasmine',
 onPrepare: function() {
   var AllureReporter = require('jasmine-allure-reporter');
   jasmine.getEnv().addReporter(new AllureReporter({
     resultsDir: 'allure-results'
   }));
 },

 specs: ['../test/zerv_platform_test_conf.js'],

 // Options to be passed to Jasmine.
jasmineNodeOpts: {
   defaultTimeoutInterval: 50000
}
 
};