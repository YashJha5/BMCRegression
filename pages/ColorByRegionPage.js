/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const ColorByRegionPage = Object.create({}, {
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

    bnt_regional_palettes : {
         get() {
             return browser.element(by.css('#layout-col-color-by-region .btn'))
         },
     },

     region_explore_btn :{
          get() {
              return browser.element(by.css('.row:nth-child(2) > .col-xs-12:nth-child(2) .btn'))
          },
      },
    
     choose_color : {
        get() {
            return browser.element(by.css('.hidden-xs > .col-md-2:nth-child(10) img'))
        },
    },
     goes_with_btn : {
        get() {
            return browser.element(by.css('.icon-goes-with'))
        },
    },
    choose_color_combination :{
        get(){
            return browser.element(by.css('.btn-reset:nth-child(4) .dark:nth-child(2)'))
        },
    },

    next_btn: {
        get(){
            return browser.element(by.css('.btn-primary:nth-child(3)'))
        },
    },
    
    see_in_room : {
        get(){
            return browser.element(by.css('.btn-icon-row .icon-see-in-room'))
        },
    },

    room_type: {
        get(){
            return browser.element(by.css('button:nth-child(6) > h4'))
        },
    },

    choose_room_space: {
        get(){
            return browser.element(by.css('section:nth-child(12) > a:nth-child(10) > .img'))
        },
    },
    info_icon : {
        get(){
            return browser.element(by.css('.light .btn-reset > .icon-info'))
        },
    },
    // info_icon : {
    //     get() {
    //         return browser.element(by.css('.light .btn-reset > .icon-info'))
    //     },
    // },

    // text_color_name : {
    //     get() {
    //         return browser.element(by.css('section > h1:nth-child(1)'))
    //     },
    // },

    // click_info_icon : {
    //     get() {
    //         return browser.element(by.css('.light .btn-reset > .icon-info'))
    //     },
    // },
    text_black_satin : {
        get() {
            return browser.element(by.css('section > h1:nth-child(1)'))
        },
    },
    
});
module.exports = ColorByRegionPage;
