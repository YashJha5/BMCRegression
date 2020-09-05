/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/
'use strict';
const Color_Page = Object.create({}, {
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
    
    lnk_color_collections: {
        get() {
            return browser.element(by.css('.row:nth-child(2) > .col-sm-6:nth-child(2) .title'));
        },
    },
 
    lnk_select_see_colors: {
        get() {
            return browser.element(by.css('.col-xs-12:nth-child(1) > .collection .btn'));
        },
    },
    ////
});
module.exports = Color_Page;
