/*
    Created By: Jogendra Singh on 2020-09-09
    Last Update By: Jogendra Singh on 2020-09-09
*/

'use strict';

const Color_Collections_Page = Object.create({}, {


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
    lnk_select_shade: {
        get() {
            return browser.element(by.css('.swatch-row:nth-child(1) .column:nth-child(2) > .swatch'));
        },
    },
    lnk_select_see_color_favorite: {
        get() {
            return browser.element(by.css('#addFavoritesMenu'));
        },
    },
    lnk_select_see_color_favorite_sign_in: {
        get() {
            return browser.element(by.css('.pseudo-link'));
        },
    },
    lnk_select_see_color_favorite_sign_in_page: {
        get() {
            return browser.element(by.css('#global-content > div > div > div:nth-child(1) > div > h1'));
        },
    },
    lnk_select_info: {
        get() {
            return browser.element(by.className('icon icon-info-circle'));
        },
    },
    lnk_select_info_image: {
        get() {
            return browser.element(by.css('#image-overlay-modal > div.modal-body > div.img-wrap > img'));
        },
    },
    lnk_select_info_image_close_btn: {
        get() {
            return browser.element(by.className('btn btn-close'));
        },
    },

    
    lnk_select_favorite: {
        get() {
            return browser.element(by.className('addToFavorite-menu-dropdown dropdown'));
        },
    },
    lnk_select_favorite_sign_in: {
        get() {
            return browser.element(by.className('pseudo-link'));
        },
    },

    lnk_select_favorite_sign_in_btn: {
        get() {
            return browser.element(by.css('#btn-user-login'));
        },
    },
    lnk_select_see_stain_colors: {
        get() {
            return browser.element(by.css('#global-content > div:nth-child(5) > div > div > div > div.col-xs-12.col-md-6.col-md-pull-6 > div > div > a'));
        },
    },

    lnk_select_see_stain_colors_jump_to_solid: {
        get() {
            return browser.element(by.css('#Detail-body > div:nth-child(3) > div > div > a:nth-child(5) > span'));
        },
    },

    lnk_select_see_stain_colors_solid_hover: {
        get() {
            return browser.element(by.css('#solid > div > span:nth-child(2) > div:nth-child(3) > div.dollop-item > img'));
        },
    },

    lnk_select_see_stain_products: {
        get() {
            return browser.element(by.css('#view-arborcoat > div > div > div:nth-child(2) > div > div > a'));
        },
    },

    lnk_select_see_stain_products_see_details: {
        get() {
            return browser.element(by.css('#global-content > div.container-fluid.sub-landing-page > div > div > div.content-box > div.row.product.product-610 > div.col-xs-10.col-sm-7.col-xs-offset-1.col-sm-offset-0 > div.mobile-break > a > span > i'));
        },
    },

    lnk_select_see_stain_products_info: {
        get() {
            return browser.element(by.css('#global-content > div.container-fluid.sub-landing-page > div > div > div.content-box > div.row.product.product-610 > div.col-xs-10.col-sm-7.col-xs-offset-1.col-sm-offset-0 > h2 > span > span > span'));
        },
    },

    lnk_select_see_stain_products_favorite: {
        get() {
            return browser.element(by.css('#addFavoritesMenu'));
        },
    },

    lnk_select_see_stain_products_favorite_sign_in: {
        get() {
            return browser.element(by.css('#global-content > div.container-fluid.sub-landing-page > div > div > div.content-box > div.row.product.product-610 > div.col-xs-10.col-sm-7.col-xs-offset-1.col-sm-offset-0 > h2 > span > span > add-favorites-menu > div > div > ul > li > a > strong'));
        },
    },



    

   


    
    // lnk_select_i: {
    //     get() {
    //         return browser.element(by.css('.collections > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)'));
    //     },
    // }



    ////
});

module.exports = Color_Collections_Page;
