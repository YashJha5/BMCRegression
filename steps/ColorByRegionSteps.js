/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ColorByRegionPage = require('../pages/ColorByRegionPage.js');
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
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ColorByRegionPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(ColorByRegionPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     ColorByRegionPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
};

exports.mouse_click_on_regional_palettes_btn = () => {
     browser.wait(EC.elementToBeClickable(ColorByRegionPage.bnt_regional_palettes), max_wait_time);
     ColorByRegionPage.bnt_regional_palettes.click();
     browser.sleep(5000);
 };

exports.mouse_click_on_region_explore_btn = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.region_explore_btn), max_wait_time);
     ColorByRegionPage.region_explore_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_choose_color = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.choose_color), max_wait_time);
     ColorByRegionPage.choose_color.click();
     browser.sleep(5000);
 };

 exports.mouse_click_goes_with = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.goes_with_btn), max_wait_time);
     ColorByRegionPage.goes_with_btn.click();
     browser.sleep(5000);
 };

 exports.mouse_click_color_combination= () => {
     browser.wait(EC.elementToBeClickable(ColorByRegionPage.choose_color_combination), max_wait_time);
      ColorByRegionPage.choose_color_combination.click();
       browser.sleep(5000);
 };

exports.mouse_click_next_btn = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.next_btn), max_wait_time);
      ColorByRegionPage.next_btn.click();
       browser.sleep(5000);
 };

exports.mouse_click_see_in_room = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.see_in_room), max_wait_time);
     ColorByRegionPage.see_in_room.click();
      browser.sleep(5000);
}; 

exports.mouse_click_room_type = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.room_type), max_wait_time);
    ColorByRegionPage.room_type.click();
    browser.sleep(5000);
};
// exports.mouse_click_room_type = () => {
//      browser.wait(EC.elementToBeClickable(ColorByRegionPage.room_type))
//      ColorByRegionPage.room_type.click();
//      browser.sleep(5000);
// };
exports.mouse_click_room_space = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.choose_room_space), max_wait_time);
      ColorByRegionPage.choose_room_space.click();
      browser.sleep(5000);
}

exports.mouse_click_info_icon = () => {
    browser.wait(EC.elementToBeClickable(ColorByRegionPage.info_icon), max_wait_time);
      ColorByRegionPage.info_icon.click();
      browser.sleep(5000);
}
// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ColorByRegionPage.info_icon), max_wait_time);
//       ColorByRegionPage.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ColorByRegionPage.room_type), max_wait_time);
//       ColorByRegionPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(ColorByRegionPage.click_room_space), max_wait_time);
//        ColorByRegionPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ColorByRegionPage.click_info_icon), max_wait_time);
//     ColorByRegionPage.click_info_icon.click();
//     browser.sleep(5000);
// }

