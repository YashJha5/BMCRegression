/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const CP_ColorFamiliesPage = Object.create({}, {
    //// Code By KKJ

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------

    nav_main_menu_navbar_center: {
        get() {
            return browser.element(by.css('.navbar-center'));
        },
    },

    nav_main_menu_navbar_color_palettes : {
        get() {
             return browser.element(by.css('li:nth-child(3) h3'))
         },
     },

     bnt_see_color_families : {
         get() {
             return browser.element(by.css('#layout-col-color-families .btn'))
         },
     },

     color_info_icon :{
         get() {
             return browser.element(by.css('.col-xs-12:nth-child(4) > .card > div > .icon'))
         },
     },
     add_favourite_icon : {
         get() {
             return browser.element(by.css('add-favorites-menu:nth-child(3) #addFavoritesMenu'))
         }
     }
    // goes_with_icon : {
    //     get() {
    //         return browser.element(by.css('.icon-goes-with'))
    //     },
    // },

    // choose_color_combination : {
    //     get() {
    //         return browser.element(by.css('.btn-reset:nth-child(3) > .light'))
    //     },
    // },

    // click_next_btn : {
    //     get() {
    //         return browser.element(by.css('.btn-primary:nth-child(3)'))
    //     },
    // },
    // click_see_room_btn : {
    //     get() {
    //         return browser.element(by.css('div > .btn-icon-row .icon-see-in-room'))
    //     },
    // },
    // click_room_type : {
    //     get() {
    //         return browser.element(by.css('button:nth-child(6) > h4'))
    //     },
    // },
    // click_room_space : {
    //     get(){
    //         return browser.element(by.css('section:nth-child(12) > a:nth-child(6) > .img'))
    //     },
    // },
    // click_info_icon : {
    //     get(){
    //         return browser.element(by.css('.light .btn-reset > .icon-info'))
    //     },
    // },
    // click_popup_info_icon : {
    //     get() {
    //         return browser.element(by.css('.lrv .icon-info'))
    //     },
    // },
    // light_reflection_value : {
    //     get() {
    //         return browser.element(by.css('.popover-title'))
    //     }
    // }
});
module.exports = CP_ColorFamiliesPage;
