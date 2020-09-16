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
const ProductCatlogSteps = require('../../../../steps/ProductCatlogSteps.js');
const ProductCatlogPage = require('../../../../pages/ProductCatlogPage.js');
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
        
        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: COLOR', () => {
           ProductCatlogSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.products);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: PRODUCT CATLOG',() => {
           ProductCatlogSteps.mouse_hover_on_product_catlog(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON LINK: ADD FAVOURITE',() => {
          ProductCatlogSteps.mouse_click_on_add_favourite();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SIGN IN OPTION',() => {
          ProductCatlogSteps.mouse_click_sign_in();
        }); 

        executeStep('STEP ' + global.step_counter++ + ': PROCESS: LOGIN', () => {
            LoginPageSteps.process_login(test_data.username, test_data.password);
            browser.sleep(20000);
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SAVE TO MY ITEM BUTTON',() => {
            ProductCatlogSteps.mouse_click_save_to_my_item();
        }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:FAVOURITE ICON ',() => {
            ProductCatlogSteps.mouse_click_favourite_icon();
        });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:MY ITEMS ',() => {
            ProductCatlogSteps.mouse_click_my_items();
        });

        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON ADD FAVOURITE BUTTON ',() => {
        //     ProductCatlogSteps.mouse_click_add_favourite();
        // });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:SEE IN ROOM',() => {
        //     ProductCatlogSteps.mouse_click_see_in_room();
        // });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM TYPE',() => {
        //     ProductCatlogSteps.mouse_click_room_type();
        // });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM SPACE',() => {
        //     ProductCatlogSteps.mouse_click_room_space();
        // });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
        //     ProductCatlogSteps.mouse_click_info_icon();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
        //     ProductCatlogSteps.mouse_click_info_icon();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     ProductCatlogSteps.mouse_click_see_in_room();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
        //     ProductCatlogSteps.mouse_click_room_type();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
        //     ProductCatlogSteps.mouse_click_room_space();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
        //     ProductCatlogSteps.mouse_click_info_icon();
        //  });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': ADDED ITEM APPEARS ', () => {
             assert.is_element_displayed(ProductCatlogPage.added_item);
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
