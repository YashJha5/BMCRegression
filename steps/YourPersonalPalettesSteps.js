/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const YourPersonalPalettesPage = require('../pages/YourPersonalPalettesPage.js');
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
    browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(YourPersonalPalettesPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_insight = (index) => {
     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.nav_main_menu_color_insight), max_wait_time);
     YourPersonalPalettesPage.nav_main_menu_color_insight.click();
     browser.sleep(5000);
    
};

exports.mouse_click_on_read_more = () => {
     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.read_more_btn), max_wait_time);
     YourPersonalPalettesPage.read_more_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_info_icon = () => {
    browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.click_info_icon), max_wait_time);
     YourPersonalPalettesPage.click_info_icon.click();
     browser.sleep(5000);
 };

exports.mouse_click_add_to_favourite = () => {
    browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.add_to_favourite_btn), max_wait_time);
     YourPersonalPalettesPage.add_to_favourite_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_sign_in_lnk = () => {
    browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.sign_in_lnk), max_wait_time);
     YourPersonalPalettesPage.sign_in_lnk.click();
     browser.sleep(5000);
 };
 
 exports.mouse_click_my_items_btn = () => {
    browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.my_items_btn), max_wait_time);
     YourPersonalPalettesPage.my_items_btn.click();
     browser.sleep(5000);
};

// exports.mouse_click_add_favourite = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.add_favourite), max_wait_time);
//       YourPersonalPalettesPage.add_favourite.click();
//        browser.sleep(5000);
//  };

// exports.mouse_click_see_in_room = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.see_in_room), max_wait_time);
//      YourPersonalPalettesPage.see_in_room.click();
//       browser.sleep(5000);
// }; 

// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.room_type), max_wait_time);
//     YourPersonalPalettesPage.room_type.click();
//     browser.sleep(5000);
// };
// exports.mouse_click_room_type = () => {
//      browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.room_type))
//      YourPersonalPalettesPage.room_type.click();
//      browser.sleep(5000);
// };

// exports.mouse_click_room_space = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.choose_room_space), max_wait_time);
//       YourPersonalPalettesPage.choose_room_space.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.info_icon), max_wait_time);
//       YourPersonalPalettesPage.info_icon.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.info_icon), max_wait_time);
//       YourPersonalPalettesPage.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.room_type), max_wait_time);
//       YourPersonalPalettesPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.click_room_space), max_wait_time);
//        YourPersonalPalettesPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(YourPersonalPalettesPage.click_info_icon), max_wait_time);
//     YourPersonalPalettesPage.click_info_icon.click();
//     browser.sleep(5000);
// }

