/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const CP_BlueColorPage = require('../pages/CP_BlueColorPage.js');
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
    browser.wait(EC.elementToBeClickable(CP_BlueColorPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(CP_BlueColorPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     CP_BlueColorPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
 };

 exports.mouse_click_on_see_color_families = () => {
     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.bnt_see_color_families), max_wait_time);
     CP_BlueColorPage.bnt_see_color_families.click();
     browser.sleep(20000);
 };

exports.mouse_click_on_learn_more_btn = () => {
    browser.wait(EC.elementToBeClickable(CP_BlueColorPage.learn_more_btn), max_wait_time);
     CP_BlueColorPage.learn_more_btn.click();
     browser.sleep(5000);
 };

// exports.mouse_hover_goes_with = (index) => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.goes_with_icon), max_wait_time);
//       CP_BlueColorPage.goes_with_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_hover_color_combinations = (index) => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.choose_color_combination), max_wait_time);
//       CP_BlueColorPage.choose_color_combination.click();
//       browser.sleep(5000);
// }

// exports.mouse_hover_next_btn = () => {
//      browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_next_btn), max_wait_time);
//        CP_BlueColorPage.click_next_btn.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_see_room = () => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_see_room_btn), max_wait_time);
//     CP_BlueColorPage.click_see_room_btn.click();
//     browser.sleep(5000);
// }

// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_room_type), max_wait_time);
//     CP_BlueColorPage.click_room_type.click();
// }

// exports.mouse_click_room_space = () => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_room_space), max_wait_time);
//     CP_BlueColorPage.click_room_space.click();
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_info_icon), max_wait_time);
//     CP_BlueColorPage.click_info_icon.click();
// }

// exports.mouse_click_popup_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(CP_BlueColorPage.click_popup_info_icon),max_wait_time);
//     CP_BlueColorPage.click_popup_info_icon.click();
// }