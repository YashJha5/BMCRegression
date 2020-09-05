/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/
'use strict';
const Color_A_Room_Page = Object.create({}, {
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

    
    lnk_color_a_room: {
        get() {
            return browser.element(by.css('.row:nth-child(3) > .col-sm-6:nth-child(1) .title'));
        },
    },
    
    lnk_bedroom_color_a_room: {
        get() {
            return browser.element(by.css('button:nth-child(4) > h4'));
        },
    },
    lnk_image_bedroom_color_a_room: {
        get() {
            return browser.element(by.css('section:nth-child(8) > a:nth-child(6) > .img'));
        },
    },


    ////
});
module.exports = Color_A_Room_Page;
