/*
    Created By: jefrydenny on 2018-09-26
    Last updated By: jefrydenny on 2018-09-26
*/

'use strict';

const HomePage = Object.create({}, {
    // lnk_menu_header_sign_out: {
    //     get() {
    //         return browser.element(by.xpath("//a[@class='auto col-md-4' and contains(@href,'Sign Out')]"));
    //     },
    // },
    
    ///
    txt_guest_username: {
        get() {
            return browser.element(by.id("guest.email"));
        }
    },
    click_guest_checkout: {
        get() {
            return browser.element(by.css("form#guestForm  button > .content"));
        }
    },
    lnk_menu_header_signin: {
        get() {
            return browser.element(by.css(".header_signin a.header-link"));
        },
    },
    /////BM.com
    lnk_header_login_register: {
    //    get() {
    //        return browser.element(by.css("div.header_signin a[class='header-link']"));
    //    },
        get() {
            return browser.element(by.css("button.ls.btn.btn-navbar > span.icon.icon-avatar-logged-in"));
        },
    },
    lnk_navigate_search: {
        //    get() {
        //        return browser.element(by.css("div.header_signin a[class='header-link']"));
        //    },
            get() {
                return browser.element(by.css("button.btn.btn-navbar > span.icon.icon-search"));
            },
        },
    /////BM.com
    btn_sign_in: {
       // get() {
            // return browser.element.all(by.css('.btn.btn-secondary')).first();
      //      return browser.element(by.css('#loginForm div.button-container button[class="btn btn-secondary"]'));
      //  },
      get() {
        return browser.element(by.css('#btn-user-login'));
    },
    },
    /////BM.com
    btn_submit: {
       
       get() {
         return browser.element(by.name("searchForm"));
     }
     },
     /////BM.com
    lnk_favourite_icon: {
        //    get() {
        //        return browser.element(by.css("a[title='Shop By Product']"));
        //    }
            get() {
                return browser.element(by.css(".icon-favorites-filled:nth-child(2)"));
            }
        },
    /////BM.com
    lnk_my_items: {
        //    get() {
        //        return browser.element(by.css("a[title='Shop By Product']"));
        //    }
            get() {
                return browser.element(by.css("li:nth-child(1) h3"));
            }
        },   
         
        /////BM.com
        btn_add_favourites_success: {
        //    get() {
        //        return browser.element(by.css("a[title='Shop By Product']"));
        //    }
            get() {
                return browser.element(by.css("col-md-3 col-sm-6 col-xs-12 favorites-item"));
            }
        }, 
    /////BM.com
    lnk_products: {
    //    get() {
    //        return browser.element(by.css("a[title='Shop By Product']"));
    //    }
        get() {
            return browser.element(by.css(".btn-navbar:nth-child(2)"));
        }
    },
    lnk_product_catalog: {
        //    get() {
        //        return browser.element(by.css("a[title='Shop By Product']"));
        //    }
            get() {
                return browser.element(by.css(".navbar-nav > li:nth-child(2)"));
            }
        },
    ///
    ////
    /////BM.com
    lnk_login_register: {
      //  get() {
      //      return browser.element(by.linkText('Log In/ Register'));
      //  },
      get() {
        return browser.element(by.css("button.ls.btn.btn-navbar > span.icon.icon-avatar-logged-out"));
    }
    },
    /////BM.com
    lnk_loggedin_register: {
        //  get() {
        //      return browser.element(by.linkText('Log In/ Register'));
        //  },
        get() {
          return browser.element(by.css('.icon-avatar-logged-in:nth-child(2)'));
      },
     },
    /////BM.com
    lnk_forgot_password_bmcom: {
      //  get() {
      //      return browser.element(by.linkText('Forgot your password?'));
      //  },
        get() {
            return browser.element(by.id("btn-user-login-forgot-password"));
        }
    },
    /////BM.com
    btn_reset_password_bmcom: {
    //    get() {
    //        return browser.element(by.css('.modal-footer > .btn-secondary'));
    //    },
        get() {
            return browser.element(by.id("forgotPasswordBtn"));
        }
    },
    /////BM.com
    btn_ok_reset_password_bmcom: {
        get() {
            return browser.element(by.css('.form-submit-msg h4'));
        },
    },
    /////BM.com
    btn_ok_bad_creds_bmcom: {
        get() {
            return browser.element(by.css('.errorMsg'));
        },
    },
    btn_ok_logged_in_bmcom: {
        get() {
            return browser.element(by.css('.modal-welcome'));
        },
    },

    txt_search_success: {
        get() {
            return browser.element(by.css('.metadata-container'));
        },
    },

    txt_sampleemail: {
    //    get() {
    //        return browser.element(by.id('forgottenPwd.email'));
    //    },
        get() {
            return browser.element(by.name("email"));
        }
    },
    /////BM.com
    txt_search_item: {
        //    get() {
        //        return browser.element(by.id('forgottenPwd.email'));
        //    },
            get() {
                return browser.element(by.id("globalSearchInput"));
            }
        },
    /////BM.com
    lnk_navigate_cart: {
        get() {
            return browser.element(by.css("button.btn.btn-navbar > span.icon.icon-shopping-cart"));
        }
    },
    /////BM.com
    lnk_navigate_shop_now: {
        get() {
            return browser.element(by.css("a.btn.btn-primary.reverse > span"));
        }
    },
    /////BM.com
    btn_login_success: {
        //    get() {
        //        return browser.element(by.css('.modal-footer > .btn-secondary'));
        //    },
            get() {
                return browser.element(by.id("profileCommunication h1"));
            }
        },
  
    lnk_select_cart: {
        get() {
            return browser.element(by.css('.c-mini-cart__icon'));
        },
    },

    btn_find_a_store: {
        get() {
            return browser.element(by.css('.nav__link > .vue-store-finder-button'));
        },
    },

    lnk_explore_color: {
        get() {
            return browser.element(by.css('.auto:nth-child(1) > .yCmsComponent > a'));
        },
    },

    ////
    
    txt_validate_customer_email: {
        get() {
            return browser.element(by.css("input[name='customerEmail']"));
        },
    },
    txt_validate_sold_to: {
        get() {
            return browser.element(by.css("input[name='soldToNumber']"));
        },
    },
    txt_validate_customer_pin: {
        get() {
            return browser.element(by.css("input[name='customerPin']"));
        },
    },
    btn_validate_customer: {
        get() {
            return browser.element(by.css(".btn.btn-block.btn-secondary.d-inline-block"));
        },
    },
    lbl_retailer_pricing_error: {
        get() {
            return browser.element(by.css(".retailer-pricing__error"));
        },
    },
    txt_header_welcome_title: {
        get() {
            return browser.element(by.css(".nav__link.nav__link--welcome"));
        },
    },
    lst_profile_sub_menu: {
        get() {
            return browser.element(by.css("#accNavComponentDesktopOne"));
        },
    },
    lnk_menu_header_profile: {
        get() {
            return browser.element(by.css(".myAccountLinksHeader.js-myAccount-toggle"));
        },
    },
    btn_switch_account: {
        get() {
            // return browser.element(by.xpath("//button[@class='btn btn-secondary']"));
            return browser.element(by.css("div.login-section__signin  button[type='submit']"));
        },
    },
    btn_account_switcher: {
        get() {
            return browser.element(by.css('.c-account-switcher__trigger'));
        },
    },
    btn_account_switcher_active: {
        get() {
            return browser.element(by.css('.c-account-switcher__trigger--active'));
        },
    },
    lnk_account_switcher_change: {
        get() {
            return browser.element(by.css('.c-account-switcher__action.js-switch-cart-modal'));
        },
    },
    btn_switch_confirm: {
        get() {
            return browser.element(by.css('.btn.btn-secondary.js-update-account'));
        },
    },
    lnk_switch_bill_to: {
        get() {
            return browser.element(by.css('.c-account-card__inner.js-account-item-trigger'));
        },
    },
    div_data_value: {
        get() {
            return browser.element(by.css('.js-select-account-form'));
        },
    },
    // txt_billto_search_box: {
    //     get() {
    //         // return browser.element(by.css('.c-account-card__list.vue-account-list .js-select-account-form'));
    //         return browser.element(by.id('accounts-search'));
    //     },
    // },
    lst_count: {
        get() {
            // return browser.element(by.css('.c-account-card__list.vue-account-list .js-select-account-form'));
            return browser.element(by.css('.account-selection__bill-address'));
        },
    },
    lbl_footer_copyright: {
        get() {
            return browser.element.all(by.css('.yCmsComponent.c-footer__copyright-nav-link')).last();
        },
    },
    lnk_bmc_logo: {
        get() {
            return browser.element.all(by.css('.icon-BMC-logo')).first();
        },
    },
    lbl_bad_credential: {
        get() {
            return browser.element(by.css('.alert.alert-danger'));
        },
    },
    /////BM.com
    txt_user_name: {
       // get() {
       //     return browser.element(by.id('j_username'));
       // },
       get() {
        return browser.element(by.css('input[name="uName"]'));
    },
    },
    txt_user_bad_name: {
        // get() {
        //     return browser.element(by.id('j_username'));
        // },
        get() {
         return browser.element(by.css('input[name="uName"]'));
     },
     },
    txt_user_name_okta: {
        get() {
            return browser.element(by.id('okta-signin-username'));
        },
    },
    /////BM.com
    txt_password: {
     //   get() {
     //       return browser.element(by.id('j_password'));
     //   },
     get() {
        return browser.element(by.css('input[name="userPw"]'));
    },
    },
    txt_bad_password: {
        //   get() {
        //       return browser.element(by.id('j_password'));
        //   },
        get() {
           return browser.element(by.css('input[name="userPw"]'));
       },
       },
    txt_password_okta: {
        get() {
            return browser.element(by.id('okta-signin-password'));
        },
    },
    btn_register_account: {
        get() {
            // return browser.element.all(by.xpath("//a[@class='btn btn-secondary']")).first();
            return browser.element(by.css("div.login-section__register a[class='btn btn-secondary']"));
        },
    },
    lnk_select_account: {
        get() {
            return browser.element(by.css("a[data-step='select-account'][class*='cart-modal']"));
        },
    },
    div_select_bill_to_loader: {
        get() {
            return browser.element(by.css(".c-account-card__inner.js-account-item-trigger"));
        },
    },
    div_account_data_value: {
        get() {
            return browser.element(by.css(".c-account-card__list.vue-account-list"));
        },
    },
    lst_account_list_item: {
        get() {
            return browser.element.all(by.css(".js-account-list-item")).last();
        },
    },
    btn_check_pricing: {
        get() {
            return browser.element(by.cssContainingText("button","CHECK PRICING"));
        },
    },
});

module.exports = HomePage;
