/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const CP_BlueColorPage = Object.create({}, {
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

     learn_more_btn :{
          get() {
              return browser.element(by.css('.col-xs-12:nth-child(4) .btn'))
          },
      },
    
    all_blue_paint : {
         get() {
             return browser.element(by.css('.btn-card:nth-child(1)'))
         },
     },

    all_blue_shades :{
        get(){
            return browser.element(by.css('.spectrum-container .column:nth-child(73) > .swatch:nth-child(4)'))
        },
    },
    choose_washington_blue : {
        get(){
            return browser.element(by.css('.swatch-row:nth-child(7) .column:nth-child(8) > .swatch'))
        },
    },

    see_in_room : {
        get(){
            return browser.element(by.css('.icon-see-in-room'))
        },
    },
    room_type : {
        get() {
            return browser.element(by.css('button:nth-child(8) > h4'))
        },
    },

    click_room_space : {
        get() {
            return browser.element(by.css('section:nth-child(16) > a:nth-child(4) > .img'))
        },
    },

    click_info_icon : {
        get() {
            return browser.element(by.css('.light .btn-reset > .icon-info'))
        },
    },
    text_washingtoon_blue: {
        get() {
            return browser.element(by.css('section > h1:nth-child(1)'))
        },
    },
    
});
module.exports = CP_BlueColorPage;
