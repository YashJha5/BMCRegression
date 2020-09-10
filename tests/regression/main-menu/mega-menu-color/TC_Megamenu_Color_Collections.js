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
const Color_Collections_Steps = require('../../../../steps/Color_Collections_Steps.js');
const Color_Collections_Page = require('../../../../pages/Color_Collections_Page.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { expect } = require('chai');
const { browser } = require('protractor');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'Color_Collections';

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
        // utils.get_page_title_element(Color_Collections_Page.lnk_main_menu_navbar_brand, function(response){
        //     assert.include(response, localized_data.page_title.home);
        // });
    });

    it(test_data.tc_description, () => {
        
        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: COLOR', () => {
            Color_Collections_Steps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);        
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': DIV: MEGA MENU IS DISPLAYED', () => {
            assert.is_element_displayed(Color_Collections_Page.div_megamenu_color_modal); 
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: FIND YOUR COLOR', () => {
            Color_Collections_Steps.click_megamenu_color_model_menu_item_link(common_data.megamenu_color_index.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': URL ENDPOINT', () => {
            assert.end_point(localized_data.navigation_endpoint.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': LINK NAVBAR BRAND IS DISPLAYED', () => {
            assert.is_element_displayed(Color_Collections_Page.lnk_main_menu_navbar_brand);
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Color Collcetions', () => {
            Color_Collections_Steps.click_color_collections();
        });
            
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Favorite', () => {
            Color_Collections_Steps.click_favorite();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Favorite Sign In', () => {
            Color_Collections_Steps.click_favorite_sign_in();
        });

        executeStep('ASSERT ' + global.assert_counter++ + ': CLICK LINK: Favorite Sign In', () => {
            assert.is_element_displayed(Color_Collections_Page.lnk_select_favorite_sign_in_btn);
        });
        
        browser.navigate().back();

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Info', () => {
            Color_Collections_Steps.click_info();
         });
        
        
        executeStep('ASSERT ' + global.assert_counter++ + ': Info Image', () => {
            assert.is_element_displayed(Color_Collections_Page.lnk_select_info_image);
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Info Image Close Button', () => {
            Color_Collections_Steps.click_info_image_close_btn();
            browser.sleep(5000);
        });

        
       


        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Colors', () => {
            Color_Collections_Steps.click_see_colors();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Select Shade', () => {
            Color_Collections_Steps.click_shade();
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Color Favorite', () => {
            Color_Collections_Steps.click_see_color_favorite();
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Color Favorite Sign In', () => {
            Color_Collections_Steps.click_see_color_favorite_sign_in();
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': Sign In', () => {
            assert.is_element_displayed(Color_Collections_Page.lnk_select_see_color_favorite_sign_in_page);
        });
        
        for(var i=0; i<2; i++){browser.navigate().back();};
        browser.sleep(5000);

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Colors', () => {
            Color_Collections_Steps.click_see_stain_colors();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Colors Jump To Solid', () => {
            Color_Collections_Steps.click_see_stain_colors_jump_to_solid();
            browser.sleep(2000);
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Colors Jump To Solid', () => {
            Color_Collections_Steps.click_see_stain_colors_solid_hover();
            browser.sleep(2000);
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Products', () => {
            Color_Collections_Steps.click_see_stain_products();
        });


        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Products See Details', () => {
            Color_Collections_Steps.click_see_stain_products_see_details();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Products Info', () => {
            Color_Collections_Steps.click_see_stain_products_info();
        });

        
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Products Favorite', () => {
            browser.sleep(8000);
            Color_Collections_Steps.click_see_stain_products_favorite();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Stain Products Favorite Sign In', () => {
            Color_Collections_Steps.click_see_stain_products_favorite_sign_in();
        });





        

        

    });

    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
