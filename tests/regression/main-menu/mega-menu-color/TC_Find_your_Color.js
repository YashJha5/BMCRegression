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
const FindYourColorSteps = require('../../../../steps/FindYourColorSteps.js');
const FindYourColorPage = require('../../../../pages/FindYourColorPage.js');
const data = require('../../../../rsc/test_data_main_menu.json');
let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;
let tc_name = 'TC_Megamenu_Color_Find_Your_Color';
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
        // utils.get_page_title_element(FindYourColorPage.lnk_main_menu_navbar_brand, function(response){
        //     assert.include(response, localized_data.page_title.home);
        // });
    });
    it(test_data.tc_description, () => {
        
        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: COLOR', () => {
            FindYourColorSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);        
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': DIV: MEGA MENU IS DISPLAYED', () => {
            assert.is_element_displayed(FindYourColorPage.div_megamenu_color_modal); 
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: FIND YOUR COLOR', () => {
            FindYourColorSteps.click_megamenu_color_model_menu_item_link(common_data.megamenu_color_index.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': URL ENDPOINT', () => {
            assert.end_point(localized_data.navigation_endpoint.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': LINK NAVBAR BRAND IS DISPLAYED', () => {
            assert.is_element_displayed(FindYourColorPage.lnk_main_menu_navbar_brand);
        });
        
        // executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Color Collcetions', () => {
        //     FindYourColorSteps.click_color_collections();
        // });
        
        // executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: See Colors', () => {
        //     FindYourColorSteps.click_see_colors();
        // });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: COLOR BY FAMILY', () => {
            FindYourColorSteps.click_color_by_family();
        });
        
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Select Yellow Color', () => {
            FindYourColorSteps.click_yellow_color();
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Select Shade In Yellow Color', () => {
            FindYourColorSteps.click_shade_in_yellow_color();
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Select Shade In Yellow Color', () => {
            FindYourColorSteps.click_signin_favourite_color();
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': Login Button Visible', () => {
            
            assert.is_visible(FindYourColorPage.lnk_signin_link_color);
            browser.sleep(2000)
        });

    });
    afterEach(() => {
        utils.reset_counters();
    });
    afterAll(() => {
        utils.clean_up(tc_name);
    });
});
 