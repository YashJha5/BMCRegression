/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ColorOfYearPage = require('../pages/ColorOfYearPage.js');
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
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ColorOfYearPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(ColorOfYearPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     ColorOfYearPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
};

exports.mouse_click_on_explore_btn = () => {
     browser.wait(EC.elementToBeClickable(ColorOfYearPage.explore_btn), max_wait_time);
     ColorOfYearPage.explore_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_on_color = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.choose_color), max_wait_time);
     ColorOfYearPage.choose_color.click();
     browser.sleep(5000);
 };

// exports.mouse_click_choose_color = () => {
//     browser.wait(EC.elementToBeClickable(ColorOfYearPage.choose_color), max_wait_time);
//      ColorOfYearPage.choose_color.click();
//      browser.sleep(5000);
//  };

 exports.mouse_click_goes_with = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.goes_with_btn), max_wait_time);
     ColorOfYearPage.goes_with_btn.click();
     browser.sleep(5000);
 };

 exports.mouse_click_color_combination= () => {
     browser.wait(EC.elementToBeClickable(ColorOfYearPage.choose_color_combination), max_wait_time);
      ColorOfYearPage.choose_color_combination.click();
       browser.sleep(5000);
 };

exports.mouse_click_next_btn = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.next_btn), max_wait_time);
      ColorOfYearPage.next_btn.click();
       browser.sleep(5000);
 };

exports.mouse_click_see_in_room = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.see_in_room), max_wait_time);
     ColorOfYearPage.see_in_room.click();
      browser.sleep(5000);
}; 

exports.mouse_click_room_type = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.room_type), max_wait_time);
    ColorOfYearPage.room_type.click();
    browser.sleep(5000);
};
exports.mouse_click_room_type = () => {
     browser.wait(EC.elementToBeClickable(ColorOfYearPage.room_type))
     ColorOfYearPage.room_type.click();
     browser.sleep(5000);
};

exports.mouse_click_room_space = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.choose_room_space), max_wait_time);
      ColorOfYearPage.choose_room_space.click();
      browser.sleep(5000);
}

exports.mouse_click_info_icon = () => {
    browser.wait(EC.elementToBeClickable(ColorOfYearPage.info_icon), max_wait_time);
      ColorOfYearPage.info_icon.click();
      browser.sleep(5000);
}

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ColorOfYearPage.info_icon), max_wait_time);
//       ColorOfYearPage.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ColorOfYearPage.room_type), max_wait_time);
//       ColorOfYearPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(ColorOfYearPage.click_room_space), max_wait_time);
//        ColorOfYearPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ColorOfYearPage.click_info_icon), max_wait_time);
//     ColorOfYearPage.click_info_icon.click();
//     browser.sleep(5000);
// }

