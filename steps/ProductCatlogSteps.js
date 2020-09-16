/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ProductCatlogPage = require('../pages/ProductCatlogPage.js');
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
    browser.wait(EC.elementToBeClickable(ProductCatlogPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ProductCatlogPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_product_catlog = (index) => {
     browser.wait(EC.elementToBeClickable(ProductCatlogPage.nav_main_menu_navbar_product_catlog), max_wait_time);
     ProductCatlogPage.nav_main_menu_navbar_product_catlog.click();
     browser.sleep(5000);
    
};

exports.mouse_click_on_add_favourite = () => {
     browser.wait(EC.elementToBeClickable(ProductCatlogPage.add_favourite_btn), max_wait_time);
     ProductCatlogPage.add_favourite_btn.click();
     browser.sleep(5000);
 };

exports.mouse_click_sign_in = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlogPage.click_sign_in), max_wait_time);
     ProductCatlogPage.click_sign_in.click();
     browser.sleep(5000);
 };

exports.mouse_click_save_to_my_item = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlogPage.save_to_my_item_btn), max_wait_time);
     ProductCatlogPage.save_to_my_item_btn.click();
     browser.sleep(5000);
 };

 exports.mouse_click_favourite_icon = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlogPage.favourite_icon_btn), max_wait_time);
     ProductCatlogPage.favourite_icon_btn.click();
     browser.sleep(5000);
 };
 
 exports.mouse_click_my_items = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlogPage.my_items), max_wait_time);
     ProductCatlogPage.my_items.click();
     browser.sleep(5000);
};

// exports.mouse_click_add_favourite = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.add_favourite), max_wait_time);
//       ProductCatlogPage.add_favourite.click();
//        browser.sleep(5000);
//  };

// exports.mouse_click_see_in_room = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.see_in_room), max_wait_time);
//      ProductCatlogPage.see_in_room.click();
//       browser.sleep(5000);
// }; 

// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.room_type), max_wait_time);
//     ProductCatlogPage.room_type.click();
//     browser.sleep(5000);
// };
// exports.mouse_click_room_type = () => {
//      browser.wait(EC.elementToBeClickable(ProductCatlogPage.room_type))
//      ProductCatlogPage.room_type.click();
//      browser.sleep(5000);
// };

// exports.mouse_click_room_space = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.choose_room_space), max_wait_time);
//       ProductCatlogPage.choose_room_space.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.info_icon), max_wait_time);
//       ProductCatlogPage.info_icon.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.info_icon), max_wait_time);
//       ProductCatlogPage.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.room_type), max_wait_time);
//       ProductCatlogPage.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(ProductCatlogPage.click_room_space), max_wait_time);
//        ProductCatlogPage.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlogPage.click_info_icon), max_wait_time);
//     ProductCatlogPage.click_info_icon.click();
//     browser.sleep(5000);
// }

