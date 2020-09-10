/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const Color_Collections_Page = require('../pages/Color_Collections_Page.js');
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
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(Color_Collections_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};

exports.click_main_menu_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.nav_main_menu_navbar_center), max_wait_time);
    Color_Collections_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.div_megamenu_color_modal), max_wait_time);
    Color_Collections_Page.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};



exports.click_color_collections = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_color_collections), max_wait_time);
    Color_Collections_Page.lnk_color_collections.click();
};
 
exports.click_see_colors = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_colors), max_wait_time);
    Color_Collections_Page.lnk_select_see_colors.click();
};

exports.click_shade = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_shade), max_wait_time);
    Color_Collections_Page.lnk_select_shade.click();
};
exports.click_see_color_favorite = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_color_favorite), max_wait_time);
    Color_Collections_Page.lnk_select_see_color_favorite.click();
};
exports.click_see_color_favorite_sign_in = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_color_favorite_sign_in), max_wait_time);
    Color_Collections_Page.lnk_select_see_color_favorite_sign_in.click();
};

exports.click_info = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_info), max_wait_time);
    Color_Collections_Page.lnk_select_info.click();
};

exports.click_info_image_close_btn = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_info_image_close_btn), max_wait_time);
    Color_Collections_Page.lnk_select_info_image_close_btn.click();
};

exports.click_favorite = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_favorite), max_wait_time);
    Color_Collections_Page.lnk_select_favorite.click();
};
exports.click_favorite_sign_in = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_favorite_sign_in), max_wait_time);
    Color_Collections_Page.lnk_select_favorite_sign_in.click();
};

exports.click_see_stain_colors = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_colors), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_colors.click();
};

exports.click_see_stain_colors_jump_to_solid = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_colors_jump_to_solid), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_colors_jump_to_solid.click();
};

exports.click_see_stain_colors_solid_hover = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_colors_solid_hover), max_wait_time);
    browser.actions().mouseMove(Color_Collections_Page.lnk_select_see_stain_colors_solid_hover).perform();

};

exports.click_see_stain_products = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_products), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_products.click();
};

exports.click_see_stain_products_see_details = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_products_see_details), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_products_see_details.click();
};

exports.click_see_stain_products_info = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_products_info), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_products_info.click();
};

exports.click_see_stain_products_favorite = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_products_favorite), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_products_favorite.click();
    //browser.actions().mouseMove(Color_Collections_Page.lnk_select_see_stain_products_favorite).perform();
};


exports.click_see_stain_products_favorite_sign_in = () => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.lnk_select_see_stain_products_favorite_sign_in), max_wait_time);
    Color_Collections_Page.lnk_select_see_stain_products_favorite_sign_in.click();
};







exports.click_megamenu_products_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.div_megamenu_paint_stain_modal), max_wait_time);
    Color_Collections_Page.div_megamenu_paint_stain_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_ideas_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.div_megamenu_advice_modal), max_wait_time);
    Color_Collections_Page.div_megamenu_advice_modal.all(by.tagName('a')).get(index).click();
};

exports.click_megamenu_professionals_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Color_Collections_Page.div_megamenu_professional_modal), max_wait_time);
    Color_Collections_Page.div_megamenu_professional_modal.all(by.tagName('a')).get(index).click();
};