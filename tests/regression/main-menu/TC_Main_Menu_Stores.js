/*
    Script Name: TC_Main_Menu_Color
    Created By: 
    Updated By:
*/

'use strict';

//IMPORTS
const executeStep = require('../../../steps/step_exec.js');
const utils = require('../../../utils/utils.js');
const assert = require('../../../utils/assert.utils.js');
const localizationSetting = require('../../../rsc/localization_setting.json');
const CommonSteps = require('../../../steps/CommonSteps.js');
const CommonPage = require('../../../pages/CommonPage.js');

const data = require('../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_Main_Menu_Stores';

describe('STORY: MAIN MENU', () => {

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
        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: STORES', () => {
            CommonSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.stores);        
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': DIV: MEGA MENU IS DISPLAYED', () => {
            assert.is_element_displayed(CommonPage.div_megamenu_retail_modal); 
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: STORES', () => {
            CommonSteps.click_main_menu_link(common_data.main_menu_index.stores);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': URL ENDPOINT', () => {
            assert.end_point(localized_data.navigation_endpoint.stores);
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': LINK NAVBAR BRAND IS DISPLAYED', () => {
            assert.is_element_displayed(CommonPage.lnk_main_menu_navbar_brand);
        });
    });

    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});