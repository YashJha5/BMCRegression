'use strict';

const rimraf = require('rimraf');
const fs = require('fs');
const Listener = require('./utils/testlistener.js');
const prep = require('./setup.js');
const AllureReporter = require('jasmine-allure-reporter');
var failFast = require('jasmine-fail-fast');
const buildName = 'Sauce Labs BMC Automation Testing in Internet Explorer.';

// Browser Window Sizes
let global_window_width = 1024;
let global_window_height = 786;
let global_is_mobile = false;

// Default-Single Test to run
let default_test = 'tests/regression/plp/TC_PLP_Account_Products_Price_Lookup_No_Purchase_Authority.js';

exports.config = {

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // TEST SETUP
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    specs: [default_test],

    // baseUrl: 'https://hybris-dev.benjaminmoore.com/us/en/',
     baseUrl: 'https://stage.shopnationalaccounts.benjaminmoore.com/us/en/',
    //baseUrl: 'https://hybris-prod.benjaminmoore.com/us/en/',

    multiCapabilities: [{
        browserName: 'internet explorer',
        // version: '10',
        // platform: 'Windows 7',
        name: "internet-explorer-tests",
        shardTestFiles: true,
        maxInstances: 1,
        handlesAlerts: true,
        cssSelectorsEnabled: true,
        trustAllSSLCertificates: true,
        ignoreProtectedModeSettings: true,
        browserAttachTimeout : 3000,

        username: 'Jefry',
        accessKey: 'd8f7eab4-d06d-499b-93fa-64523bdcf069'
    }],

    maxSessions: 1,

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // SETUP - DO NOT Change (unless needed)
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    framework: 'jasmine2',
    jasmineNodeOpts: {
        realtimeFailure: true,
        showColors: true,
        defaultTimeoutInterval: 1900000
    },
    beforeLaunch: () => {
        const outputbasedir = './output';
        if (fs.existsSync(outputbasedir)) {
            rimraf.sync(outputbasedir);
        }
        fs.mkdirSync(outputbasedir);
        const logdir = `${outputbasedir}/logs`;
        if (!fs.existsSync(logdir)) {
            fs.mkdirSync(logdir);
        }
    },
    onPrepare: () => {
        prep.browser(global_window_width, global_window_height);
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().pageLoadTimeout(60000);

        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: './output/allure-results/',
        }));
        jasmine.getEnv().addReporter(new Listener('./output'));
        jasmine.getEnv().addReporter(failFast.init());

        global.EC = protractor.ExpectedConditions;

        global.ignore_base_url = false;
        global.default_language = 'en';
        global.default_country = 'US';
        global.default_store = '';
        global.step_counter = 1;
        global.assert_counter = 1;
        global.folder = '';
        global.test_desc = '';

        var caps = browser.getCapabilities();
    },

    resultJsonOutputFile: './protractor_runtime_report.json',
    restartBrowserBetweenTests: false,
    // getPageTimeout: 30000,
    allScriptsTimeout: 480000,
    // saucelabs timeout
    maxDuration: 10800,
    commandTimeout: 600,
    idleTimeout: 180,



    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // SUITES and GLOBAL PARAMETERS
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    suites: {
        sanity: 'tests/sanity/**/*.js',
        regression: 'tests/regression/**/*.js',
        registration: 'tests/regression/registration/**/*.js',
        login: 'tests/regression/login/**/*.js',
        plp: 'tests/regression/plp/**/*.js',
        pdp: 'tests/regression/pdp/**/*.js',
        contact: 'tests/regression/contact/**/*.js',
        roles: 'tests/regression/roles/**/*.js',
        navigation: 'tests/regression/navigation/**/*.js',
        mycompany: 'tests/regression/my-company/**/*.js',
        myfavorites: 'tests/regression/my-favorites/**/*.js',
        profile: 'tests/regression/profile/**/*.js',
        search: 'tests/regression/search/**/*.js',
        checkout: 'tests/regression/checkout/**/*.js',
        confirmation: 'tests/regression/confirmation/**/*.js',
        asm: 'tests/regression/asm/**/*.js'
    },

    params: {
        login: {
            user: '',
            password: '',
            baduser: '',
        },
        localization: {
            English: '',
            French: '0'
        },
        env_us: {
            staging: 'https://stage.shopnationalaccounts.benjaminmoore.com/us/en/',
            dev: 'https://hybris-dev.benjaminmoore.com/us/en/',
            prod: 'https://hybris-prod.benjaminmoore.com/us/en/',
        },
    },
    onComplete: function (passed) {

    var printSessionId = function (jobName) {
        browser.getSession().then(function (session) {
            console.log('SauceOnDemandSessionID=' + session.getId() + ' Build-name=' + buildName);

            if(passed) {
              console.log("Test Case: "+test_desc+" Passed");
              console.log('All specs have passed');
              let sauce_testcase_name = "sauce:job-name="+test_desc;
              browser.executeScript("sauce:job-result=passed");
              browser.executeScript(sauce_testcase_name);
            }
            else {
                console.log("Test Case: "+test_desc+" Failed");
                console.log('At least one spec has failed');
                let sauce_testcase_name = "sauce:job-name="+test_desc;
                browser.executeScript("sauce:job-result=failed");
                browser.executeScript(sauce_testcase_name);
            }
        });
    };
    printSessionId(buildName);

  }
};
