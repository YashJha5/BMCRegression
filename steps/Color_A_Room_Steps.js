/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/
'use strict';
const Color_A_Room_Page = require('../pages/Color_A_Room_Page.js');
const utils = require('../utils/utils.js');
const executeStep = require('../steps/step_exec.js');
const assert = require('../utils/assert.utils.js');
let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;
// ------------------------------------------------------------------------------------------------------------------------
// GENERAL
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
// MAIN MENU HEADER Section
// ------------------------------------------------------------------------------------------------------------------------
exports.mouse_hover_on_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(Color_A_Room_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};
exports.click_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.nav_main_menu_navbar_center), max_wait_time);
    Color_A_Room_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.div_megamenu_color_modal), max_wait_time);
    Color_A_Room_Page.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};
exports.click_color_collections = () => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.lnk_color_collections), max_wait_time);
    Color_A_Room_Page.lnk_color_collections.click();
};
 
exports.click_see_colors = () => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.lnk_select_see_colors), max_wait_time);
    Color_A_Room_Page.lnk_select_see_colors.click();
};
exports.click_megamenu_products_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.div_megamenu_paint_stain_modal), max_wait_time);
    Color_A_Room_Page.div_megamenu_paint_stain_modal.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_ideas_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.div_megamenu_advice_modal), max_wait_time);
    Color_A_Room_Page.div_megamenu_advice_modal.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_professionals_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.div_megamenu_professional_modal), max_wait_time);
    Color_A_Room_Page.div_megamenu_professional_modal.all(by.tagName('a')).get(index).click();
};


exports.click_color_a_room = () => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.lnk_color_a_room), max_wait_time);
    Color_A_Room_Page.lnk_color_a_room.click();
};
exports.click_bedroom = () => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.lnk_bedroom_color_a_room), max_wait_time);
    Color_A_Room_Page.lnk_bedroom_color_a_room.click();
};
exports.click_image_in_bedroom = () => {
    browser.wait(EC.elementToBeClickable(Color_A_Room_Page.lnk_image_bedroom_color_a_room), max_wait_time);
    Color_A_Room_Page.lnk_image_bedroom_color_a_room.click();
    //browser.sleep(20000)
};
