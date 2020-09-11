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
const CP_ColorFamiliesSteps = require('../../../../steps/CP_ColorFamiliesSteps.js');
const CP_ColorFamiliesPage = require('../../../../pages/CP_ColorFamiliesPage.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_BestSelling_Color';

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
            CP_ColorFamiliesSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: COLOR PALETTES',() => {
            CP_ColorFamiliesSteps.mouse_hover_on_color_palettes(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE COLOR FAMILIES',() => {
           CP_ColorFamiliesSteps.mouse_click_on_see_color_families();
        });    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: BLUE COLOR FAMILY INFO ICON',() => {
            CP_ColorFamiliesSteps.mouse_click_on_color_info_icon();
        });    
        executeStep('ASSERT ' + global.assert_counter++ + ': LIGHT REFLECTION VALUE TEXT VISIBLE', () => {
             assert.is_element_displayed(CP_ColorFamiliesPage.add_favourite_icon);
             //browser.sleep(2000)
        });       
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: GOES WITH ',() => {
        //     CP_ColorFamiliesSteps.mouse_hover_goes_with();
        //        }); 
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE COLOR COMBINATION',() => {
        //     CP_ColorFamiliesSteps.mouse_hover_color_combinations();
        //         });   
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: NEXT BUTTON',() => {
        //      CP_ColorFamiliesSteps.mouse_hover_next_btn();
        //         });  
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     CP_ColorFamiliesSteps.mouse_click_see_room();
        //         });  
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SELECT A ROOM',() => {
        //     CP_ColorFamiliesSteps.mouse_click_room_type();
        //         });  
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SELECT A ROOM SPACE',() => {
        //     CP_ColorFamiliesSteps.mouse_click_room_space();
        //         });
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
        //     CP_ColorFamiliesSteps.mouse_click_info_icon();
        //         });   
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON POP-UP INFO ICON',() => {
        //     CP_ColorFamiliesSteps.mouse_click_popup_info_icon();
        //         });
        // executeStep('ASSERT ' + global.assert_counter++ + ': LIGHT REFLECTION VALUE TEXT VISIBLE', () => {
        //     assert.is_element_displayed(CP_ColorFamiliesPage.light_reflection_value);
        //     //browser.sleep(2000)
        //         });   
        });
    
       
    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
