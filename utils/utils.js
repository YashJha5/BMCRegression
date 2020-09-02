/**
 * Created by jefrydenny on 2018-09-26
 */

'use strict';

const HomePage = require('../pages/HomePage.js');
const CommonPage = require('../pages/CommonPage.js');
const dataprovider = require('./dataprovider.utils.js');
// const fs = require('fs');
const fs = require('fs-extra')

let EC = protractor.ExpectedConditions;
let max_wait_time = 5000;

var d = new Date();
var timestamp = d.toUTCString().replace(/ /g,'_').replace(/:/g,'-');

//Copy and Save the latest allure-report into a new destination Folder: Report:
function copy_report(tc_name){
    fs.copy('./output', './Report/' + tc_name + '_' + timestamp)
        .then(() => console.log('.'))
        .catch(err => console.error(err))
};

//GET: Current Page Title
exports.get_page_title = (callback) => {
    browser.wait(EC.elementToBeClickable(HomePage.lnk_bmc_logo), max_wait_time);
    browser.getTitle().then(function(response) {
        callback(response);
    });
};

exports.get_page_title_element = (element, callback) => {
    browser.wait(EC.elementToBeClickable(element), max_wait_time);
    browser.getTitle().then(function(response) {
        callback(response);
    });
};

//TODO:
exports.write_file = (path, data) => {
    let temp = '{[';
    let temp2 = ']}';
    fs.writeFile(path, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
};

//SET TEST DATA
exports.set_test_data = (test_data, test_case_name, callback) => {
    test_data.forEach( function (test_data) {
        if(test_data.testcase === test_case_name){
            callback(test_data);
        }
    });
};

//Cleanup of Browser
exports.clean_up = (tc_name) => {
    // browser.executeScript('window.sessionStorage.clear();');
    // browser.executeScript('window.localStorage.clear();');
    // browser.manage().deleteAllCookies();
    copy_report(tc_name);
};

//Reset Counters
exports.reset_counters = () => {
    global.step_counter = 1;
    global.assert_counter = 1;
};

// KEYBOARD ACTION: ENTER
exports.press_enter = () => {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
};

// KEYBOARD ACTION: ESC
exports.key_press_esc = () => {
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
};

// Checks the Presence (visible on the page) of the specified Element
exports.isElementDisplayed = (expected_element, callback) => {
    expected_element.isDisplayed().then(function(expected_result){
        callback(expected_result);
    });
};

// Scroll to the bottom of the page
exports.scroll_bottom_page = () => {
    browser.wait(EC.visibilityOf(CommonPage.lbl_footer_copyright), max_wait_time);
    browser.executeScript("arguments[0].scrollIntoView();", CommonPage.lbl_footer_copyright.getWebElement());
};

// Extract Numeric values from a String
exports.get_numbers = (str_actual) => {
    let int_number = str_actual.match(/\d/g);
    int_number = int_number.join("");
    return int_number;
};

// Sets the initial state of the website.
exports.set_base_state = (str_url_under_test, bool_ignore_base_url) => {
  if(bool_ignore_base_url === true){
      if(browser.baseUrl !== str_url_under_test){
          browser.driver.get(str_url_under_test);
      }
    }
};

// Navigate to the user-specified URL and extracts the enviroment's Current tag version
exports.url_under_test = (str_url_aut) => {
    browser.driver.get(str_url_aut + '/info_version.txt');
    browser.driver.findElement(by.tagName('body')).getText().then(function(response){
        let str_tag_version = response.split("\n");
        browser.driver.get(str_url_aut);
    });
};

// Gets and returns the current language
exports.get_current_language = (callback) => {
    HomePage.current_language.getText().then(function(response_language){
        callback(response_language);
    });
};

// Gets and returns the current locale url
exports.get_current_url_locale = (callback) => {
    browser.getCurrentUrl().then(function(current_url){
        let str_current_url = [];
        str_current_url = current_url.split(".com/", 5);
        let str_url_locale = str_current_url[1].slice(0, 5)
        callback(str_url_locale);
    });
};

// Navigate back one page without a specified explicit wait
exports.navigate_back_page = () => {
    browser.driver.navigate().back();
};

// Navigate back one page with a specified explicit wait
exports.navigate_back = (element_specified) => {
    browser.driver.navigate().back();
    browser.wait(EC.elementToBeClickable(element_specified), max_wait_time);
};

// Generates a random email for account creation.
exports.random_email = (test_data) => {
    let result = '';
    const chars = 'abcde012345';
    for (let i = 8; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    result += '@mailinator.com';
    result = 'auto' + test_data.country[0] + result;
    console.log(result);
    return result;
};

// Generate and Returns a random number
exports.random_item = (int_max_num) => {
    let int_min_num = 1;
    return Math.floor(Math.random() * (int_max_num - 1)) + int_min_num;
};

// Gets and returns the initial language content from the tag <head/meta>
exports.get_init_language = (callback) => {
    HomePage.meta_onload_language.getAttribute('content').then(function(content_value){
        callback(content_value);
    });
};

// Gets and returns the current url
exports.get_current_url = (callback) => {
    browser.getCurrentUrl().then(function(current_url){
        callback(current_url);
    });
};

// Gets and returns the current date and time
exports.get_current_date = () => {
    let curr_date_time =  new Date()
        .toISOString()
        .replace(/T/, '_')
        .replace(/\..+/, '');
    return curr_date_time;
};

exports.load_property_file = (loc_default_language) => {
    let local_data;

    switch(loc_default_language) {
        case 'US-EN':
            local_data = dataprovider.dataprovider('./rsc/localization_us_en.json');
            return local_data;
            break;
        case 'US-ES':
            local_data = dataprovider.dataprovider('./rsc/localization_us_es.json');
            return local_data;
            break;
        case 'CA-EN':
            local_data = dataprovider.dataprovider('./rsc/localization_ca_en.json');
            return local_data;
            break;
        case 'CA-FR':
            local_data = dataprovider.dataprovider('./rsc/localization_ca_fr.json');
            return local_data;
            break;
        default:
            local_data = dataprovider.dataprovider('./rsc/common_property_file.json');
            return local_data;
            break;
    }
};
