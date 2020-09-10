/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const Color_Portfolio_App_Page = require('../pages/Color_Portfolio_App_Page.js');
const utils = require('../utils/utils.js');
const executeStep = require('./step_exec.js');
const assert = require('../utils/assert.utils.js');

let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;
// ------------------------------------------------------------------------------------------------------------------------
// GENERAL
// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------
// MAIN MENU HEADER Section
// ------------------------------------------------------------------------------------------------------------------------

exports.mouse_hover_on_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(Color_Portfolio_App_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};

exports.click_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.nav_main_menu_navbar_center), max_wait_time);
    Color_Portfolio_App_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.div_megamenu_color_modal), max_wait_time);
    Color_Portfolio_App_Page.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};



exports.click_color_portfolio_app = () => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.lnk_color_portfolio_app), max_wait_time);
    Color_Portfolio_App_Page.lnk_color_portfolio_app.click();
};

exports.click_color_portfolio_app_android = () => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.lnk_color_portfolio_app_android), max_wait_time);
    Color_Portfolio_App_Page.lnk_color_portfolio_app_android.click();
};

exports.click_color_portfolio_app_iphone = () => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.lnk_color_portfolio_app_iphone), max_wait_time);
    Color_Portfolio_App_Page.lnk_color_portfolio_app_iphone.click();
};
 

exports.click_megamenu_products_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.div_megamenu_paint_stain_modal), max_wait_time);
    Color_Portfolio_App_Page.div_megamenu_paint_stain_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_ideas_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.div_megamenu_advice_modal), max_wait_time);
    Color_Portfolio_App_Page.div_megamenu_advice_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_professionals_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Portfolio_App_Page.div_megamenu_professional_modal), max_wait_time);
    Color_Portfolio_App_Page.div_megamenu_professional_modal.all(by.tagName('a')).get(index).click();
};