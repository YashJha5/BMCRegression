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
const Color_A_Room_Steps = require('../../../../steps/Color_A_Room_Steps.js');
const Color_A_Room_Page = require('../../../../pages/Color_A_Room_Page.js');
const data = require('../../../../rsc/test_data_main_menu.json');
let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;
let tc_name = 'TC_Color_A_Room';
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
        // utils.get_page_title_element(Color_A_Room_Page.lnk_main_menu_navbar_brand, function(response){
        //     assert.include(response, localized_data.page_title.home);
        // });
    });
    it(test_data.tc_description, () => {
        
        executeStep('STEP ' + global.step_counter++ + ': MOUSE HOVER ON LINK: COLOR', () => {
            Color_A_Room_Steps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);        
        });
        executeStep('ASSERT ' + global.assert_counter++ + ': DIV: MEGA MENU IS DISPLAYED', () => {
            assert.is_element_displayed(Color_A_Room_Page.div_megamenu_color_modal); 
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: FIND YOUR COLOR', () => {
            Color_A_Room_Steps.click_megamenu_color_model_menu_item_link(common_data.megamenu_color_index.find_your_color);
        });
        

        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: COLOR A ROOM', () => {
            Color_A_Room_Steps.click_color_a_room();
        });
        
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Click Bedroom', () => {
            Color_A_Room_Steps.click_bedroom();
        });
        executeStep('STEP ' + global.step_counter++ + ': CLICK LINK: Select image for bedroom', () => {
            Color_A_Room_Steps.click_image_in_bedroom();
        });

    });
    afterEach(() => {
        utils.reset_counters();
    });
    afterAll(() => {
        utils.clean_up(tc_name);
    });
});
 