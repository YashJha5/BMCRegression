/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const ColorBrochurePage = Object.create({}, {
    //// Code By KKJ

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------

    nav_main_menu_navbar_center: {
        get() {
            return browser.element(by.css('.navbar-center'));
        },
    },

    nav_main_menu_navbar_find_color: {
        get() {
            return browser.element(by.css('li:nth-child(2) h3'))
        },
    },

    main_menu_color_brochure: {
        get() {
            return browser.element(by.css('#global-content > div > div > div > div > div > div.row.color-link-cards > div > div:nth-child(4) > div:nth-child(1) > a > div.card-content > h3'))
        },
    },

    main_menu_brochure_info:{
        get() {
            return browser.element(by.css('#global-content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > div'))
        },
    },
});

module.exports = ColorBrochurePage;
