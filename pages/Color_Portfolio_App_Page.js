/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const { browser } = require("protractor");

const Color_Portfolio_App_Page = Object.create({}, {
    //// Code By KKJ

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------

    lnk_main_menu_navbar_brand: {
        get() {
            return browser.element(by.css('#global-navbar .navbar-brand'));
        },
    },

    nav_main_menu_navbar_center: {
        get() {
            return browser.element(by.css('.navbar-center'));
        },
    },

    lnk_main_menu_btn_navbar: {
        get() {
            return browser.element(by.css('.btn.btn-navbar'));
        },
    },

    div_megamenu_color_modal: {
        get() {
            return browser.element(by.css('#megamenu-color-modal'));
        },
    },

    div_megamenu_paint_stain_modal: {
        get() {
            return browser.element(by.css('#megamenu-paint-stain-modal'));
        },
    },

    div_megamenu_advice_modal: {
        get() {
            return browser.element(by.css('#megamenu-advice-modal'));
        },
    },

    div_megamenu_professional_modal: {
        get() {
            return browser.element(by.css('#megamenu-professional-modal'));
        },
    },

    div_megamenu_retail_modal: {
        get() {
            return browser.element(by.css('#megamenu-retail-modal'));
        },
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // Global Footer Section
    // ------------------------------------------------------------------------------------------------------------------------
    
    lnk_footer_about_us: {
        get() {
            return browser.element(by.css('#global-footer'));
        },
    },


    
    lnk_color_portfolio_app: {
        get() {
            return browser.element(by.css('.row:nth-child(3) > .col-sm-6:nth-child(2) .title'));
        },
    },

    lnk_color_portfolio_app_android: {
        get() {
            return browser.element(by.css('#global-content > div:nth-child(1) > div:nth-child(4) > div > div > div:nth-child(13) > p > a'));
        },
    },
    lnk_color_portfolio_app_iphone: {
        get() {
            return browser.element(by.css('#global-content > div:nth-child(1) > div:nth-child(4) > div > div > div:nth-child(14) > p > a'));
        },
    },

    lnk_color_portfolio_app_android_download_page: {
        get() {
            return browser.element(by.css('#gbq1 > div > a > img'));
        },
    },

    lnk_color_portfolio_app_iphone_download_page: {
        get() {
            return browser.element(by.css('#ac-gn-firstfocus'));
        },
    },

    lnk_color_portfolio_app_name_android_download_page: {
        get() {
            return browser.element(by.css('#fcxH9b > div.WpDbMd > c-wiz > div > div.ZfcPIb > div > div > main > c-wiz:nth-child(1) > c-wiz:nth-child(1) > div > div.D0ZKYe > div > div.sIskre > c-wiz:nth-child(1) > h1 > span'));
        },
    },

    lnk_color_portfolio_app_name_iphone_download_page: {
        get() {
            return browser.element(by.css('#ember167 > div > div.l-column.small-7.medium-8.large-9.small-valign-top > header > h1'));
        },
    },
    // lnk_color_portfolio_app_iphone_download_page: {
    //     get() {
    //         return browser.element(by.css('#global-content > div:nth-child(1) > div:nth-child(4) > div > div > div:nth-child(14) > p > a'));
    //     },
    // },

    




    ////
});

module.exports = Color_Portfolio_App_Page;
