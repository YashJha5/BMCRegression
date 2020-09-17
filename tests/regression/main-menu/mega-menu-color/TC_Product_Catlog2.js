/*
    Script Name: TC_Main_Menu_Color
    Created By: 
    Updated By:
/*
    Script Name: TC_Main_Menu_Color
    Created By: 
    Updated By:
*/

'use strict';

//IMPORTS
const executeStep = require('../../../../steps/step_exec.js');
const utils = require('../../../../utils/utils.js');
const assert = require('../../../../utils/assert.utils.js');
const localizationSetting = require('../../../../rsc/localization_setting.json');

//Different in all files 
const ProductCatlog2Steps = require('../../../../steps/ProductCatlog2Steps.js');
const ProductCatlog2Page = require('../../../../pages/ProductCatlog2Page.js');
//New added 
const LoginPageSteps = require('../../../../steps/LoginPageSteps.js');

const data = require('../../../../rsc/test_data_main_menu.json');
//const { browser } = require('../../../../setup.js');
const { browser } = require('protractor');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_Product_Catlog2';

describe('STORY: MEGAMENU COLOR OVERVIEW', () => {

    let test_data = [];
    let localized_data;

    utils.set_test_data(data, tc_name, function(response){
        test_data = response;
        test_desc = test_data.tc_description;
    });

    beforeAll(() => {
        localized_data = utils.load_property_file(localizationSetting.country);
    });

    beforeEach(() => {
        // utils.get_page_title_element(CommonPage.lnk_main_menu_navbar_brand, function(response){
        //     assert.include(response, localized_data.page_title.home);
        // });
    });

    it(test_data.tc_description, () => {
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON LINK: CLCIK ON SIGN IN AVTAR',() => {
            ProductCatlog2Steps.mouse_click_on_sign_in();
            });
        
        executeStep('STEP ' + global.step_counter++ + ': PROCESS: LOGIN', () => {
            LoginPageSteps.process_login(test_data.username, test_data.password);
            browser.sleep(20000);
            });

        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: COLOR', () => {
           ProductCatlog2Steps.mouse_hover_on_main_menu_link(common_data.main_menu_index.products);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: PRODUCT CATLOG',() => {
           ProductCatlog2Steps.mouse_hover_on_product_catlog(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:ADD FAVOURITE ICON ',() => {
            ProductCatlog2Steps.mouse_click_add_favourite_icon();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ADD ITEM BUTTON',() => {
            ProductCatlog2Steps.mouse_click_add_item();
        }); 
        
        

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:FAVOURUTE ICON BUTTON ',() => {
            ProductCatlog2Steps.mouse_click_favourite_icon();
        });

        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON ADD FAVOURITE BUTTON ',() => {
        //     ProductCatlog2Steps.mouse_click_add_favourite();
        // });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: MY ITEMS',() => {
            ProductCatlog2Steps.mouse_click_my_items();
        });
        
        

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     ProductCatlog2Steps.mouse_click_see_in_room();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
        //     ProductCatlog2Steps.mouse_click_room_type();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
        //     ProductCatlog2Steps.mouse_click_room_space();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
        //     ProductCatlog2Steps.mouse_click_info_icon();
        //  });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': ADDED ITEM APPEARS ', () => {
             assert.is_element_displayed(ProductCatlog2Page.added_item);
             //browser.sleep(2000)
        });       
        
        });
    
       
    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
