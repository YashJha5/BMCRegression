/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const CommonPage = Object.create({}, {
    //// Code By YJ 

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------
    
    //------------------------------ Code For Color By Family------------------//
    
    lnk_color_families: {
        get() {
            return browser.element(by.css('.row:nth-child(2) > .col-sm-6:nth-child(1) .title'));
        },
    },

    lnk_select_yellow_color: {
        get() {
            return browser.element(by.css('.row:nth-child(1) > .col-xs-12:nth-child(1) > .family .column:nth-child(20) > .swatch:nth-child(3)'));
        },
    },
    lnk_select_shade_in_yellow_color: {
        get() {
            return browser.element(by.css('.swatch-row:nth-child(2) .column:nth-child(7) > .swatch'));
        },
    },
    lnk_signin_color: {
        get() {
            return browser.element(by.css('#addFavoritesMenu'));
        },
    },
    lnk_signin_link_color: {
        get() {
            return browser.element(by.css('.pseudo-link'));
        },
    },


    //--------------------Code End For Color By Family-----------------------------------------------//
    //....---------------------------------------------------------------------------------..........//
//--------------------------------------------Color A Room Code ------------------------------------------------////

    // lnk_color_a_room: {
    //     get() {
    //         return browser.element(by.css('.row:nth-child(3) > .col-sm-6:nth-child(1) .title'));
    //     },
    // },
    
    // lnk_bedroom_color_a_room: {
    //     get() {
    //         return browser.element(by.css('button:nth-child(4) > h4'));
    //     },
    // },
    // lnk_image_bedroom_color_a_room: {
    //     get() {
    //         return browser.element(by.css('section:nth-child(8) > a:nth-child(6) > .img'));
    //     },
    // },












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

    ////
});

module.exports = CommonPage;
