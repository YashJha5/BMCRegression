/*
    Created By: jefrydenny on 2018-10-18
    Last Update By: Anamul yaxley on 2018-10-18
*/

'use strict';

const { browser } = require("protractor");

const ProductCatlog2Page = Object.create({}, {
    //// Code By KKJ

    // ------------------------------------------------------------------------------------------------------------------------
    // MAIN MENU HEADER Section
    // ------------------------------------------------------------------------------------------------------------------------

    click_sign_in :{
        get() {
            return browser.element(by.css('.icon-avatar-logged-out:nth-child(2)'))
        },
    },
    nav_main_menu_navbar_center: {
        get() {
            return browser.element(by.css('.navbar-center'));
        },
    },

    nav_main_menu_navbar_product_catlog : {
        get() {
             return browser.element(by.css('li:nth-child(2) h3'))
         },
     },

    add_favourite_btn: {
         get() {
             return browser.element(by.css('#addFavoritesMenu'))
         },
     },

    
    
    add_item : {
        get() {
            return browser.element(by.css('#global-content > div > div > div.catalog-view > div > div > div.tab-content > div > div:nth-child(1) > div.col-xs-10.col-md-4.col-xs-offset-1.col-md-offset-0 > h2 > add-favorites-menu > div > div > ul > li:nth-child(1) > a'))
        },
    },

    favourite_icon_btn : {
        get() {
            return browser.element(by.css('.icon-favorites-filled:nth-child(2)'))
        },
    },
    
    my_items : {
        get() {
            return browser.element(by.css('li:nth-child(1) h3'))
        },
    },
    
    
    // add_favourite: {
    //     get(){
    //         return browser.element(by.css('.row:nth-child(1) #addFavoritesMenu'))
    //     },
    // },
    
    // sign_in_link: {
    //     get(){
    //         return browser.element(by.css('.open .pseudo-link'))
    //     },
    // },

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
    added_item : {
        get() {
            return browser.element(by.css('#global-content > div > div:nth-child(1) > div > div.favorite-items-view > div > div.favorites-tabs > div > div.tab-pane.active > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > a > span > img'))
        },
    },
    
});
module.exports = ProductCatlog2Page;
