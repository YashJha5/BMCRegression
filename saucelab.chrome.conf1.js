'use strict';

const rimraf = require('rimraf');
const fs = require('fs');
const Listener = require('./utils/testlistener.js');
const prep = require('./setup.js');
const AllureReporter = require('jasmine-allure-reporter');
var failFast = require('jasmine-fail-fast');
const buildName = 'Sauce Labs BMC Automation Testing in Chrome.';

// Browser Window Sizes
let global_window_width = 1024;
let global_window_height = 786;
let global_is_mobile = false;

// Default-Single Test to run
let default_test = 'tests/regression/main-menu/TC_Megamenu_Products_Overview.js';

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

    specs: [default_test],
    baseUrl: 'https://dev-www.benjaminmoore1.com/en-us',
    directConnect: true,

    multiCapabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        name: "chrome-tests",
        chromeOptions: {
            args: ['disable-infobars','--no-sandbox']
        },
        splitTestsBetweenCapabilities: true,
        acceptInsecureCerts : true,
        cssSelectorsEnabled: true,
        shardTestFiles: true,
        maxInstances: 1,

        username: 'kamal_jangir',
        accessKey: 'f9e9cdf0-e5f8-4400-b17f-62c134993cb1'
    }],

    maxSessions: 1,

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // SETUP - DO NOT Change (unless needed)
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    framework: 'jasmine2',
    jasmineNodeOpts: {
        realtimeFailure: true,
        showColors: true,
        defaultTimeoutInterval: 480000
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
        regression: 'tests/regression/**/*.js',
        main_menu: 'tests/regression/main-menu/**/*.js',
        mega_menu_color: 'tests/regression/main-menu/mega-menu-color/**/*.js'
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
            //staging: 'https://stage-www.benjaminmoore1.com/en-us',
            dev: 'https://dev-www.benjaminmoore1.com/en-us',
            //prod: 'https://benjaminmoore.com/en-us',
        },
    },
    onComplete: function (passed) {

    var printSessionId = function (jobName) {
        browser.getSession().then(function (session) {
            console.log('SauceOnDemandSessionID=' + session.getId() + ' Biuld-name=' + buildName);

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
