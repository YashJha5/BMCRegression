/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const BestSellingPage = require('../pages/BestSellingPage.js');
const utils = require('../utils/utils.js');
const executeStep = require('./step_exec.js');
const assert = require('../utils/assert.utils.js');
const { browser } = require('protractor');

let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;
// ------------------------------------------------------------------------------------------------------------------------
// GENERAL
// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------
// MAIN MENU HEADER Section
// ------------------------------------------------------------------------------------------------------------------------

exports.mouse_hover_on_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(BestSellingPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(BestSellingPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_find_your_color_link = (index) => {
    browser.wait(EC.elementToBeClickable(BestSellingPage.nav_main_menu_navbar_find_color), max_wait_time);
    BestSellingPage.nav_main_menu_navbar_find_color.click();
    
}

exports.mouse_hover_on_see_color = (index) => {
    browser.wait(EC.elementToBeClickable(BestSellingPage.see_color), max_wait_time);
    BestSellingPage.see_color.click();
}

exports.mouse_hover_BestSelling_white_color= (index) => {
  browser.wait(EC.elementToBeClickable(BestSellingPage.BestSelling_white_color), max_wait_time);
    BestSellingPage.BestSelling_white_color.click();
    //browser.sleep(20000);
}
exports.mouse_hover_color_info= (index) => {
    browser.wait(EC.elementToBeClickable(BestSellingPage.white_color_info_button), max_wait_time);
      BestSellingPage.white_color_info_button.click();
      browser.sleep(5000);
  }