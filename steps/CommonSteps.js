/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const CommonPage = require('../pages/CommonPage.js');
const utils = require('../utils/utils.js');
const executeStep = require('../steps/step_exec.js');
const assert = require('../utils/assert.utils.js');
// const { browser } = require('../setup.js');

let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;
// ------------------------------------------------------------------------------------------------------------------------
// GENERAL
// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------
// MAIN MENU HEADER Section
// ------------------------Color BY Family------------------------------------------------------------------------------///




exports.click_color_by_family = () => {
    browser.wait(EC.elementToBeClickable(CommonPage.lnk_color_families), max_wait_time);
    CommonPage.lnk_color_families.click();
};

exports.click_yellow_color = () => {
    browser.wait(EC.elementToBeClickable(CommonPage.lnk_select_yellow_color), max_wait_time);
    CommonPage.lnk_select_yellow_color.click();
};
exports.click_shade_in_yellow_color = () => {
    browser.wait(EC.elementToBeClickable(CommonPage.lnk_select_shade_in_yellow_color), max_wait_time);
    CommonPage.lnk_select_shade_in_yellow_color.click();
};
exports.click_signin_favourite_color = () => {
    browser.wait(EC.elementToBeClickable(CommonPage.lnk_signin_color), max_wait_time);
    CommonPage.lnk_signin_color.click();
    browser.sleep(20000)
};

// //--------------------------------------------Color By Family Code-----------------------------------------------////

// //--------------------------------------------Color A Room Code ------------------------------------------------////
// exports.click_color_a_room = () => {
//     browser.wait(EC.elementToBeClickable(CommonPage.lnk_color_a_room), max_wait_time);
//     CommonPage.lnk_color_a_room.click();
// };
// exports.click_bedroom = () => {
//     browser.wait(EC.elementToBeClickable(CommonPage.lnk_bedroom_color_a_room), max_wait_time);
//     CommonPage.lnk_bedroom_color_a_room.click();
// };
// exports.click_image_in_bedroom = () => {
//     browser.wait(EC.elementToBeClickable(CommonPage.lnk_image_bedroom_color_a_room), max_wait_time);
//     CommonPage.lnk_image_bedroom_color_a_room.click();
//     //browser.sleep(20000)
// };









exports.mouse_hover_on_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(CommonPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};

exports.click_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.nav_main_menu_navbar_center), max_wait_time);
    CommonPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.div_megamenu_color_modal), max_wait_time);
    CommonPage.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_products_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.div_megamenu_paint_stain_modal), max_wait_time);
    CommonPage.div_megamenu_paint_stain_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_ideas_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.div_megamenu_advice_modal), max_wait_time);
    CommonPage.div_megamenu_advice_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_professionals_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(CommonPage.div_megamenu_professional_modal), max_wait_time);
    CommonPage.div_megamenu_professional_modal.all(by.tagName('a')).get(index).click();
};