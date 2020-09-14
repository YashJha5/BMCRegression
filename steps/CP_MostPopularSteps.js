/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const CP_MostPopularPage = require('../pages/CP_MostPopularPage.js');
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
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(CP_MostPopularPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     CP_MostPopularPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
 };

exports.mouse_click_on_see_most_popular_color = () => {
     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.bnt_see_popular_color), max_wait_time);
     CP_MostPopularPage.bnt_see_popular_color.click();
     browser.sleep(20000);
 };

exports.mouse_click_on_explore_color_fam = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.explore_color_families_btn), max_wait_time);
     CP_MostPopularPage.explore_color_families_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_color = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.click_color), max_wait_time);
     CP_MostPopularPage.click_color.click();
     browser.sleep(5000);
 };

 exports.mouse_click_color_shade = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.click_color_shade), max_wait_time);
     CP_MostPopularPage.click_color_shade.click();
     browser.sleep(5000);
 };
 exports.mouse_click_choose_color = () => {
     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.choose_color), max_wait_time);
      CP_MostPopularPage.choose_color.click();
       browser.sleep(5000);
 };

exports.mouse_click_see_in_room = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage. see_in_room), max_wait_time);
     CP_MostPopularPage. see_in_room.click();
      browser.sleep(5000);
}; 

exports.mouse_click_room_type = () => {
     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.room_type))
     CP_MostPopularPage.room_type.click();
     browser.sleep(5000);
}
exports.mouse_click_room_space = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.choose_room_space), max_wait_time);
      CP_MostPopularPage.choose_room_space.click();
      browser.sleep(5000);
}

exports.mouse_click_info_icon = () => {
    browser.wait(EC.elementToBeClickable(CP_MostPopularPage.info_icon), max_wait_time);
      CP_MostPopularPage.info_icon.click();
      browser.sleep(5000);
}
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.room_type), max_wait_time);
//       CP_MostPopularPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(CP_MostPopularPage.click_room_space), max_wait_time);
//        CP_MostPopularPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(CP_MostPopularPage.click_info_icon), max_wait_time);
//     CP_MostPopularPage.click_info_icon.click();
//     browser.sleep(5000);
// }

