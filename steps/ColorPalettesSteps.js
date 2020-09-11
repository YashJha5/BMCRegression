/*
    Created By: jefrydenny on 2018-09-26
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const ColorPalettesPage = require('../pages/ColorPalettesPage.js');
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
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(ColorPalettesPage.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();

};

exports.mouse_hover_on_color_palettes = (index) => {
     browser.wait(EC.elementToBeClickable(ColorPalettesPage.nav_main_menu_navbar_color_palettes), max_wait_time);
     ColorPalettesPage.nav_main_menu_navbar_color_palettes.click();
     browser.sleep(5000);
    
 }

 exports.mouse_hover_on_see_best_selling_colors = (index) => {
     browser.wait(EC.elementToBeClickable(ColorPalettesPage.bnt_best_selling_color), max_wait_time);
     ColorPalettesPage.bnt_best_selling_color.click();
     browser.sleep(5000);
 }

exports.mouse_hover_on_best_selling_blue_colors= (index) => {
  browser.wait(EC.elementToBeClickable(ColorPalettesPage.BestSelling_blue_color), max_wait_time);
    ColorPalettesPage.BestSelling_blue_color.click();
    browser.sleep(5000);
}
exports.mouse_hover_goes_with = (index) => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.goes_with_icon), max_wait_time);
      ColorPalettesPage.goes_with_icon.click();
      browser.sleep(5000);
}
exports.mouse_hover_color_combinations = (index) => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.choose_color_combination), max_wait_time);
      ColorPalettesPage.choose_color_combination.click();
      browser.sleep(5000);
}

exports.mouse_hover_next_btn = () => {
     browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_next_btn), max_wait_time);
       ColorPalettesPage.click_next_btn.click();
       browser.sleep(5000);
 }

exports.mouse_click_see_room = () => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_see_room_btn), max_wait_time);
    ColorPalettesPage.click_see_room_btn.click();
    browser.sleep(5000);
}

exports.mouse_click_room_type = () => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_room_type), max_wait_time);
    ColorPalettesPage.click_room_type.click();
}

exports.mouse_click_room_space = () => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_room_space), max_wait_time);
    ColorPalettesPage.click_room_space.click();
}

exports.mouse_click_info_icon = () => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_info_icon), max_wait_time);
    ColorPalettesPage.click_info_icon.click();
}

exports.mouse_click_popup_info_icon = () => {
    browser.wait(EC.elementToBeClickable(ColorPalettesPage.click_popup_info_icon),max_wait_time);
    ColorPalettesPage.click_popup_info_icon.click();
}