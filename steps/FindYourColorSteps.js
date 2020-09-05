/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/
'use strict';
const FindYourColorPage = require('../pages/FindYourColorPage.js');
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
    browser.wait(EC.elementToBeClickable(FindYourColorPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(FindYourColorPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};
exports.click_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.nav_main_menu_navbar_center), max_wait_time);
    FindYourColorPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.div_megamenu_color_modal), max_wait_time);
    FindYourColorPage.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};
exports.click_color_collections = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_color_collections), max_wait_time);
    FindYourColorPage.lnk_color_collections.click();
};
 
exports.click_see_colors = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_select_see_colors), max_wait_time);
    FindYourColorPage.lnk_select_see_colors.click();
};
exports.click_megamenu_products_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.div_megamenu_paint_stain_modal), max_wait_time);
    FindYourColorPage.div_megamenu_paint_stain_modal.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_ideas_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.div_megamenu_advice_modal), max_wait_time);
    FindYourColorPage.div_megamenu_advice_modal.all(by.tagName('a')).get(index).click();
};
exports.click_megamenu_professionals_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.div_megamenu_professional_modal), max_wait_time);
    FindYourColorPage.div_megamenu_professional_modal.all(by.tagName('a')).get(index).click();
};


exports.click_color_by_family = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_color_families), max_wait_time);
    FindYourColorPage.lnk_color_families.click();
};

exports.click_yellow_color = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_select_yellow_color), max_wait_time);
    FindYourColorPage.lnk_select_yellow_color.click();
};
exports.click_shade_in_yellow_color = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_select_shade_in_yellow_color), max_wait_time);
    FindYourColorPage.lnk_select_shade_in_yellow_color.click();
};
exports.click_signin_favourite_color = () => {
    browser.wait(EC.elementToBeClickable(FindYourColorPage.lnk_signin_color), max_wait_time);
    FindYourColorPage.lnk_signin_color.click();
    browser.sleep(20000)
};