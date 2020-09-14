/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const ColorOfYearPage = Object.create({}, {
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

    explore_btn: {
         get() {
             return browser.element(by.css('.row:nth-child(5) .btn'))
         },
     },

     choose_color :{
          get() {
              return browser.element(by.css('.hidden-xs > .col-md-2:nth-child(8) img'))
          },
      },
    
    //  choose_color : {
    //     get() {
    //         return browser.element(by.css('.hidden-xs > .col-md-2:nth-child(10) img'))
    //     },
    // },
     goes_with_btn : {
        get() {
            return browser.element(by.css('.icon-goes-with'))
        },
    },
    choose_color_combination :{
        get(){
            return browser.element(by.css('.btn-reset:nth-child(4) > .light'))
        },
    },

    next_btn: {
        get(){
            return browser.element(by.css('.btn-primary:nth-child(3)'))
        },
    },
    
    see_in_room : {
        get(){
            return browser.element(by.css('div > .btn-icon-row .icon-see-in-room'))
        },
    },

    room_type: {
        get(){
            return browser.element(by.css('.hidden-xs > button:nth-child(3) > h4'))
        },
    },

    choose_room_space: {
        get(){
            return browser.element(by.css('section:nth-child(6) > a:nth-child(6) > .img'))
        },
    },

    
    
    info_icon : {
        get() {
            return browser.element(by.css('.light .btn-reset > .icon-info'))
        },
    },

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
    text_Cushing_Green : {
        get() {
            return browser.element(by.css('section > h1:nth-child(1)'))
        },
    },
    
});
module.exports = ColorOfYearPage;
