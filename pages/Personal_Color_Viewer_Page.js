/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const { browser } = require("protractor");

const Personal_Color_Viewer_page = Object.create({}, {
    //// Code By KKJ

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------

    nav_main_menu_navbar_center: {
        get() {
            return browser.element(by.css('.navbar-center'));
        },
    },

    div_megamenu_color_modal: {
        get() {
            return browser.element(by.css('#megamenu-color-modal'));
        },
    },

    lnk_personal_color_viewer: {
        get() {
            return browser.element(by.css('.hidden-xs .title'));
        },
    },

    lnk_personal_color_viewer_start_project: {
        get() {
            return browser.element(by.css('div.row:nth-child(9) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)'));
        },
    },


    lnk_personal_color_viewer_start_project_choose_sample_img: {
        get() {
            return browser.element(by.css('#newUpload'));
        },
    },
    ////


});

module.exports = Personal_Color_Viewer_page;
