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
const CP_BlueColorSteps = require('../../../../steps/CP_BlueColorSteps.js');
const CP_BlueColorpage = require('../../../../pages/CP_BlueColorpage.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_CP_BluePaint';

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
           CP_BlueColorSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: COLOR PALETTES',() => {
           CP_BlueColorSteps.mouse_hover_on_color_palettes(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE COLOR FAMILIES',() => {
          CP_BlueColorSteps.mouse_click_on_see_color_families();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: BLUE COLOR LEARN MORE',() => {
          CP_BlueColorSteps.mouse_click_on_learn_more_btn();
        });    
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE ALL BLUE PAINTS',() => {
            CP_BlueColorSteps.mouse_click_all_blue_paint();
         });
         
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE ALL BLUE SHADES',() => {
            CP_BlueColorSteps.mouse_click_blue_shades();
         });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE ALL BLUE SHADES',() => {
            CP_BlueColorSteps.mouse_click_washington_blue();
         });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
            CP_BlueColorSteps.mouse_click_see_in_room();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
            CP_BlueColorSteps.mouse_click_room_type();
         });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
            CP_BlueColorSteps.mouse_click_room_space();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
            CP_BlueColorSteps.mouse_click_info_icon();
         });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': WASHINGTOON BLUE VISIBLE', () => {
             assert.is_element_displayed(CP_BlueColorpage.text_washingtoon_blue);
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
