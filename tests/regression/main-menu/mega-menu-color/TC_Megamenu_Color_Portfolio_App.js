/*
    Script Name: TC_Megamenu_Personal_Color_Viewer
    Created By: Jogendra Singh
    Updated By: Jogendra Singh
*/

'use strict';

//IMPORTS
const executeStep = require('../../../../steps/step_exec.js');
const utils = require('../../../../utils/utils.js');
const assert = require('../../../../utils/assert.utils.js');
const localizationSetting = require('../../../../rsc/localization_setting.json');
const Color_Portfolio_App_Steps = require('../../../../steps/Color_Portfolio_App_Steps.js');
const Color_Collections_Page = require('../../../../pages/Color_Collections_Page.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { expect } = require('chai');
const { browser } = require('protractor');
const Color_Portfolio_App_Page = require('../../../../pages/Color_Portfolio_App_Page.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'Color_Portfolio_App';

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
            Color_Portfolio_App_Steps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);        
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': DIV: MEGA MENU IS DISPLAYED', () => {
            assert.is_element_displayed(Color_Collections_Page.div_megamenu_color_modal); 
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: FIND YOUR COLOR', () => {
            Color_Portfolio_App_Steps.click_megamenu_color_model_menu_item_link(common_data.megamenu_color_index.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': URL ENDPOINT', () => {
            assert.end_point(localized_data.navigation_endpoint.find_your_color);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': LINK NAVBAR BRAND IS DISPLAYED', () => {
            assert.is_element_displayed(Color_Collections_Page.lnk_main_menu_navbar_brand);
        });


        
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Color Portfolio App', () => {
            Color_Portfolio_App_Steps.click_color_portfolio_app();
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Color Portfolio App Android', () => {
            Color_Portfolio_App_Steps.click_color_portfolio_app_android();
            browser.sleep(5000);
        });

        browser.getAllWindowHandles().then(function(getallGUID){

            browser.switchTo().window(getallGUID[1]);
            browser.sleep(5000);
            executeStep('ASSERT ' + global.assert_counter++ + ': Google Play Store', () => {
                assert.is_element_displayed(Color_Portfolio_App_Page.lnk_color_portfolio_app_android_download_page);
            });

            executeStep('ASSERT ' + global.assert_counter++ + ': App Name On Google Play Store', () => {
                assert.is_element_displayed(Color_Portfolio_App_Page.lnk_color_portfolio_app_name_android_download_page);
            });

            browser.driver.close();
            browser.switchTo().window(getallGUID[0]);

                    
        });

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Color Portfolio App iPhone', () => {
            Color_Portfolio_App_Steps.click_color_portfolio_app_iphone();
            browser.sleep(5000);
        });

        browser.getAllWindowHandles().then(function(getallGUID){

            browser.switchTo().window(getallGUID[1]);
            browser.sleep(5000);

            executeStep('ASSERT ' + global.assert_counter++ + ': App Name on iPhone App Store', () => {
                assert.is_element_displayed(Color_Portfolio_App_Page.lnk_color_portfolio_app_iphone_download_page);
            });

            executeStep('ASSERT ' + global.assert_counter++ + ': App Name on iPhone App Store', () => {
                assert.is_element_displayed(Color_Portfolio_App_Page.lnk_color_portfolio_app_name_iphone_download_page);
            });

            browser.driver.close();
            browser.switchTo().window(getallGUID[0]); 

        });
    });

    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
