var jasmineReporters = require('jasmine-reporters');
exports.config = {
  baseUrl: 'http://localhost:8000/app/',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
  seleniumPort: 4444,
  seleniumArgs: ['-browserTimeout=60'],
  framework: 'jasmine',
  troubleshoot: false, //true if you want to see actual web-driver configuration
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args': ['--ignore-ssl-errors=true', '--web-security=false']
  },

  specs: ['e2e-tests/*.js'], //path to the test specs
  allScriptsTimeout: 60000,
  getPageTimeout: 60000,
  /*onPrepare: function () {
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
        new jasmine.JUnitXmlReporter('protractor-results', true, true)
    );
  },*/
  /*onPrepare: function () {
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      savePath: '..',
      consolidateAll: false
    }));
  },*/
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    isVerbose: false,
    includeStackTrace: false
  }
};