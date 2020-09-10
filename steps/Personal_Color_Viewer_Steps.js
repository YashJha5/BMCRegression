/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const Personal_Color_Viewer_Page = require('../pages/Personal_Color_Viewer_Page.js');
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
    browser.wait(EC.elementToBeClickable(Personal_Color_Viewer_Page.nav_main_menu_navbar_center), max_wait_time);
    browser.actions().mouseMove(Personal_Color_Viewer_Page.nav_main_menu_navbar_center.all(by.tagName('a')).get(index)).perform();
};

exports.click_megamenu_color_model_menu_item_link = (index) => {
    browser.wait(EC.elementToBeClickable(Personal_Color_Viewer_Page.div_megamenu_color_modal), max_wait_time);
    Personal_Color_Viewer_Page.div_megamenu_color_modal.all(by.tagName('a')).get(index).click();
};

exports.click_personal_color_viewer = () => {
    browser.wait(EC.elementToBeClickable(Personal_Color_Viewer_Page.lnk_personal_color_viewer), max_wait_time);
    Personal_Color_Viewer_Page.lnk_personal_color_viewer.click();
};

exports.click_personal_color_viewer_start_project = () => {
    browser.wait(EC.elementToBeClickable(Personal_Color_Viewer_Page.lnk_personal_color_viewer_start_project), max_wait_time);
    Personal_Color_Viewer_Page.lnk_personal_color_viewer_start_project.click();
};

exports.click_personal_color_viewer_start_project_choose_sample_img = () => {
    browser.wait(EC.elementToBeClickable(Personal_Color_Viewer_Page.lnk_personal_color_viewer_start_project_choose_sample_img), max_wait_time);
    Personal_Color_Viewer_Page.lnk_personal_color_viewer_start_project_choose_sample_img.click();
};
