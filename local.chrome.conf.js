'use strict';

const rimraf = require('rimraf');
const fs = require('fs');
const Listener = require('./utils/testlistener.js');
const prep = require('./setup.js');
const AllureReporter = require('jasmine-allure-reporter');
var failFast = require('jasmine-fail-fast');
const buildName = 'Sauce Labs BMC Automation Testing in Chrome from Local Tests.';

// Browser Window Sizes
let global_window_width = 1366;
let global_window_height = 1024;
let global_is_mobile = false;

// Default-Single Test to run
//let default_test = 'tests/regression/main-menu/TC_Megamenu_Products_Overview.js';
//let default_test = 'tests/regression/main-menu/mega-menu-products/TC_Megamenu_Products_Quality_Begins_With_Chemistry.js';
// let default_test = 'tests/regression/main-menu/mega-menu-color/TC_Megamenu_Color_Find_Your_Color.js';
let default_test = 'tests/regression/main-menu/mega-menu-color/TC_Color_A_Room.js';

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
        maxInstances: 1

        // username: 'Jefry',
        // accessKey: 'd8f7eab4-d06d-499b-93fa-64523bdcf069'
    }],
    
//    capabilities: {
//        browserName: 'chrome',
//        chromeOptions: {
//            args: ['--no-sandbox','disable-infobars']
//        },
//        shardTestFiles: true,
//        splitTestsBetweenCapabilities: true,
//        acceptInsecureCerts : true,
//        maxInstances: 1,
//        count: 1,
//    },

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
        browser.manage().timeouts().implicitlyWait(10000);
        browser.manage().timeouts().pageLoadTimeout(60000);
        browser.ignoreSynchronization = true;

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
    getPageTimeout: 30000,
    allScriptsTimeout: 480000,

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
            English: '1',
            French: '0'
        },
        env_us: {
            // staging: 'https://stage.shopnationalaccounts.benjaminmoore.com/us/en/',
            // dev: 'https://hybris-dev.benjaminmoore.com/us/en/',
            // prod: 'https://hybris-prod.benjaminmoore.com/us/en/',
        },
    },

    onComplete: function (passed) {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' Biuld-name=' + buildName);

                if(passed) {
                  console.log("Test Case: "+test_desc+" Passed");
                  console.log('All specs have passed');
                //   let sauce_testcase_name = "sauce:job-name="+test_desc;
                //   browser.executeScript("sauce:job-result=passed");
                //   browser.executeScript(sauce_testcase_name);
                }
                else {
                    console.log("Test Case: "+test_desc+" Failed");
                    console.log('At least one spec has failed');
                    // let sauce_testcase_name = "sauce:job-name="+test_desc;
                    // browser.executeScript("sauce:job-result=failed");
                    // browser.executeScript(sauce_testcase_name);
                }
            });
        };
        printSessionId(buildName);
      }
};