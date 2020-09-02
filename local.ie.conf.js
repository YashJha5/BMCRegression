'use strict';

const rimraf = require('rimraf');
const fs = require('fs');
const Listener = require('./utils/testlistener.js');
const prep = require('./setup.js');
const AllureReporter = require('jasmine-allure-reporter');
var failFast = require('jasmine-fail-fast');

// Browser Window Sizes
let global_window_width = 1366;
let global_window_height = 1024;
let global_is_mobile = false;

// Default-Single Test to run
let default_test = 'tests/us/my-company/TC_My_Company_Corporate_Admin_Account_Summary.js';

exports.config = {

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // TEST SETUP
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    // seleniumAddress: 'http://10.97.96.21:58360/wd/hub'

    specs: [default_test],
    baseUrl: 'https://stage.shopnationalaccounts.benjaminmoore.com/us/en/',

    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // SETUP - RUNNING SCRIPTS WITH INTERNET EXPLORER
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    capabilities: {
        browserName: 'internet explorer',
        version: '11',
        name: "internet-explorer-tests",
        handlesAlerts: true,
        cssSelectorsEnabled: true,
        trustAllSSLCertificates: true,
        ignoreProtectedModeSettings: true,
        browserAttachTimeout : 5000,
        splitTestsBetweenCapabilities: true,

        username: 'Jefry',
        accessKey: 'd8f7eab4-d06d-499b-93fa-64523bdcf069',

    },

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
    allScriptsTimeout: 480000,
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    // SUITES and GLOBAL PARAMETERS
    // * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

    suites: {
        us: 'tests/US/**/*.js',
        regression: 'tests/US/regression/*.js',
        smoke: 'tests/US/smoke/**/*.js',
        sanity: 'tests/US/sanity/**/*.js',
        registration: 'tests/US/registration/**/*.js',
        login: 'tests/US/login/**/*.js',
        plp: 'tests/US/plp/**/*.js',
        pdp: 'tests/US/pdp/**/*.js',
        contact: 'tests/US/contact/**/*.js',
        roles: 'tests/US/roles/**/*.js',
        navigation: 'tests/US/navigation/**/*.js',
        mycompany: 'tests/US/my-company/**/*.js',
        myfavorites: 'tests/US/my-favorites/**/*.js',
        profile: 'tests/US/profile/**/*.js',
        search: 'tests/US/search/**/*.js',
        checkout: 'tests/US/checkout/**/*.js',
        confirmation: 'tests/US/confirmation/**/*.js',
        asm: 'tests/US/asm/**/*.js'
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
        },
    },

    onComplete: function () {
        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId(global.tc_name);
    }
};
