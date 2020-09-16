/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const FeaturedInteriorPaintPage = Object.create({}, {
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

    feature_product_btn :{
          get() {
              return browser.element(by.css('.btn-card:nth-child(2)'))
          },
      },
    
    learn_more_btn : {
        get() {
            return browser.element(by.css('.row:nth-child(1) .btn:nth-child(1)'))
        },
    },
     see_details_btn : {
        get() {
            return browser.element(by.css('.row:nth-child(1) .mobile-break .icon-down-arrow'))
        },
    },
    info_icon :{
        get(){
            return browser.element(by.css('.product-522 .icon-info'))
        },
    },

    add_favourite: {
        get(){
            return browser.element(by.css('.row:nth-child(1) #addFavoritesMenu'))
        },
    },
    
    sign_in_link: {
        get(){
            return browser.element(by.css('.open .pseudo-link'))
        },
    },

    // room_type: {
    //     get(){
    //         return browser.element(by.css('.hidden-xs > button:nth-child(3) > h4'))
    //     },
    // },

    // choose_room_space: {
    //     get(){
    //         return browser.element(by.css('section:nth-child(6) > a:nth-child(6) > .img'))
    //     },
    // },

    
    
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
    // text_Cushing_Green : {
    //     get() {
    //         return browser.element(by.css('section > h1:nth-child(1)'))
    //     },
    // },
    
});
module.exports = FeaturedInteriorPaintPage;
