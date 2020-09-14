/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const CP_MostPopularPage = Object.create({}, {
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

     bnt_see_popular_color : {
         get() {
             return browser.element(by.css('#layout-col-popular-colors .btn'))
         },
     },

    explore_color_families_btn :{
          get() {
              return browser.element(by.css('.btn-card:nth-child(1)'))
          },
      },
    
    click_color : {
         get() {
             return browser.element(by.css('.row:nth-child(1) > .col-xs-12:nth-child(3) .column:nth-child(46) > .swatch:nth-child(4)'))
         },
     },
    click_color_shade : {
        get() {
            return browser.element(by.css('.spectrum-container .column:nth-child(69) > .swatch:nth-child(4)'))
        },
    },
    choose_color :{
        get(){
            return browser.element(by.css('.swatch-row:nth-child(6) .column:nth-child(7) > .swatch'))
        },
    },
    see_in_room : {
        get(){
            return browser.element(by.css('.icon-see-in-room'))
        },
    },
    room_type : {
        get(){
            return browser.element(by.css('button:nth-child(2) > h4'))
        },
    },

    choose_room_space: {
        get(){
            return browser.element(by.css('section:nth-child(4) > a:nth-child(9) > .img'))
        },
    },
    info_icon : {
        get() {
            return browser.element(by.css('.light .btn-reset > .icon-info'))
        },
    },

    text_color_name : {
        get() {
            return browser.element(by.css('section > h1:nth-child(1)'))
        },
    },

    // click_info_icon : {
    //     get() {
    //         return browser.element(by.css('.light .btn-reset > .icon-info'))
    //     },
    // },
    // text_washingtoon_blue: {
    //     get() {
    //         return browser.element(by.css('section > h1:nth-child(1)'))
    //     },
    // },
    
});
module.exports = CP_MostPopularPage;
