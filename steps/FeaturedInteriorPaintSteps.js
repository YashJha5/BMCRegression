/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const FeaturedInteriorPaintPage = require('../pages/FeaturedInteriorPaintPage.js');
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
    browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(FeaturedInteriorPaintPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     FeaturedInteriorPaintPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
};

exports.mouse_click_on_explore_btn = () => {
     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.explore_btn), max_wait_time);
     FeaturedInteriorPaintPage.explore_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_feature_product = () => {
    browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.feature_product_btn), max_wait_time);
     FeaturedInteriorPaintPage.feature_product_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_learn_more = () => {
    browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.learn_more_btn), max_wait_time);
     FeaturedInteriorPaintPage.learn_more_btn.click();
     browser.sleep(5000);
 };

 exports.mouse_click_see_details = () => {
    browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.see_details_btn), max_wait_time);
     FeaturedInteriorPaintPage.see_details_btn.click();
     browser.sleep(5000);
 };

 exports.mouse_click_info_icon = () => {
     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.info_icon), max_wait_time);
      FeaturedInteriorPaintPage.info_icon.click();
       browser.sleep(5000);
 };

exports.mouse_click_add_favourite = () => {
    browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.add_favourite), max_wait_time);
      FeaturedInteriorPaintPage.add_favourite.click();
       browser.sleep(5000);
 };

// exports.mouse_click_see_in_room = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.see_in_room), max_wait_time);
//      FeaturedInteriorPaintPage.see_in_room.click();
//       browser.sleep(5000);
// }; 

// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.room_type), max_wait_time);
//     FeaturedInteriorPaintPage.room_type.click();
//     browser.sleep(5000);
// };
// exports.mouse_click_room_type = () => {
//      browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.room_type))
//      FeaturedInteriorPaintPage.room_type.click();
//      browser.sleep(5000);
// };

// exports.mouse_click_room_space = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.choose_room_space), max_wait_time);
//       FeaturedInteriorPaintPage.choose_room_space.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.info_icon), max_wait_time);
//       FeaturedInteriorPaintPage.info_icon.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.info_icon), max_wait_time);
//       FeaturedInteriorPaintPage.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.room_type), max_wait_time);
//       FeaturedInteriorPaintPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.click_room_space), max_wait_time);
//        FeaturedInteriorPaintPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(FeaturedInteriorPaintPage.click_info_icon), max_wait_time);
//     FeaturedInteriorPaintPage.click_info_icon.click();
//     browser.sleep(5000);
// }

