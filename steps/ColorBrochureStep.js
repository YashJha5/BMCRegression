/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ColorBrochurePage = require('../pages/ColorBrochurePage.js');
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
    browser.wait(EC.elementToBeClickable(ColorBrochurePage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ColorBrochurePage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_find_your_color_link = (index) => {
    browser.wait(EC.elementToBeClickable(ColorBrochurePage.nav_main_menu_navbar_find_color), max_wait_time);
    ColorBrochurePage.nav_main_menu_navbar_find_color.click();
    //browser.action().mouseMove(ColorBrochurePage.nav_main_menu_navbar_find_color.all(by.tagName('a')).get(index)).perform();
    //browser.sleep(5000);
}

exports.mouse_hover_on_color_brochure = (index) => {
    browser.wait(EC.elementToBeClickable(ColorBrochurePage.main_menu_color_brochure), max_wait_time);
    //browser.actions().mouseMove(ColorBrochurePage.main_menu_color_brochure).all(by.tagName('a').get(index)).perform();
    ColorBrochurePage.main_menu_color_brochure.click();
}

exports.mouse_hover_brochure_info = (index) => {
    browser.wait(EC.elementToBeClickable(ColorBrochurePage.main_menu_brochure_info), max_wait_time);
    //browser.actions().mouseMove(ColorBrochurePage.main_menu_brochure_info).all(by.tag('a').get(index)).perform();
    ColorBrochurePage.main_menu_brochure_info.click();
    browser.sleep(20000);
}