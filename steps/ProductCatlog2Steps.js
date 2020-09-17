/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ProductCatlog2Page = require('../pages/ProductCatlog2Page.js');
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

exports.mouse_click_on_sign_in = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlog2Page.click_sign_in), max_wait_time);
     ProductCatlog2Page.click_sign_in.click();
     browser.sleep(5000);
};

exports.mouse_hover_on_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(ProductCatlog2Page.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ProductCatlog2Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_product_catlog = (index) => {
     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.nav_main_menu_navbar_product_catlog), max_wait_time);
     ProductCatlog2Page.nav_main_menu_navbar_product_catlog.click();
     browser.sleep(5000);
    
};

exports.mouse_click_add_favourite_icon = () => {
     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.add_favourite_btn), max_wait_time);
     ProductCatlog2Page.add_favourite_btn.click();
     browser.sleep(5000);
 };



exports.mouse_click_add_item = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlog2Page.add_item), max_wait_time);
     ProductCatlog2Page.add_item.click();
     browser.sleep(5000);
 };

 exports.mouse_click_favourite_icon = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlog2Page.favourite_icon_btn), max_wait_time);
     ProductCatlog2Page.favourite_icon_btn.click();
     browser.sleep(5000);
 };
 
 exports.mouse_click_my_items = () => {
    browser.wait(EC.elementToBeClickable(ProductCatlog2Page.my_items), max_wait_time);
     ProductCatlog2Page.my_items.click();
     browser.sleep(5000);
};

// exports.mouse_click_add_favourite = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.add_favourite), max_wait_time);
//       ProductCatlog2Page.add_favourite.click();
//        browser.sleep(5000);
//  };

// exports.mouse_click_see_in_room = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.see_in_room), max_wait_time);
//      ProductCatlog2Page.see_in_room.click();
//       browser.sleep(5000);
// }; 

// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.room_type), max_wait_time);
//     ProductCatlog2Page.room_type.click();
//     browser.sleep(5000);
// };
// exports.mouse_click_room_type = () => {
//      browser.wait(EC.elementToBeClickable(ProductCatlog2Page.room_type))
//      ProductCatlog2Page.room_type.click();
//      browser.sleep(5000);
// };

// exports.mouse_click_room_space = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.choose_room_space), max_wait_time);
//       ProductCatlog2Page.choose_room_space.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.info_icon), max_wait_time);
//       ProductCatlog2Page.info_icon.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.info_icon), max_wait_time);
//       ProductCatlog2Page.info_icon.click();
//       browser.sleep(5000);
// }
// exports.mouse_click_room_type = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.room_type), max_wait_time);
//       ProductCatlog2Page.room_type.click();
//       browser.sleep(5000);
// }

// exports.mouse_click_room_space = () => {
//      browser.wait(EC.elementToBeClickable(ProductCatlog2Page.click_room_space), max_wait_time);
//        ProductCatlog2Page.click_room_space.click();
//        browser.sleep(5000);
//  }

// exports.mouse_click_info_icon = () => {
//     browser.wait(EC.elementToBeClickable(ProductCatlog2Page.click_info_icon), max_wait_time);
//     ProductCatlog2Page.click_info_icon.click();
//     browser.sleep(5000);
// }

