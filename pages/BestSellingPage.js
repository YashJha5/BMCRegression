/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const BestSellingPage = Object.create({}, {
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

    see_color: {
        get() {
            return browser.element(by.css('#global-content > div > div > div > div > div > div:nth-child(3) > div > div > a'))
        },
    },

    BestSelling_white_color:{
        get() {
            return browser.element(by.css('#layout-col-whites .row:nth-child(2) > .col-md-2:nth-child(3) img'))
        },
    },

    white_color_info_button:{
        get() {
            return browser.element(by.css('.icon-info'))
        },
    },
});

module.exports = BestSellingPage;
