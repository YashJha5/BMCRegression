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
const ColorOfYearSteps = require('../../../../steps/ColorOfYearSteps.js');
const ColorOfYearPage = require('../../../../pages/ColorOfYearPage.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_ColorOfYear';

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
           ColorOfYearSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: COLOR PALETTES',() => {
           ColorOfYearSteps.mouse_hover_on_color_palettes(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: EXPLORE BUTTON',() => {
          ColorOfYearSteps.mouse_click_on_explore_btn();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE COLOR',() => {
          ColorOfYearSteps.mouse_click_on_color();
        }); 
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE A COLOR',() => {
        //     ColorOfYearSteps.mouse_click_choose_color();
        // }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON GOES WITH BUTTON ',() => {
            ColorOfYearSteps.mouse_click_goes_with();
          });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE COLOR COMBINATION ',() => {
            ColorOfYearSteps.mouse_click_color_combination();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON NEXT BUTTON ',() => {
            ColorOfYearSteps.mouse_click_next_btn();
        });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:SEE IN ROOM',() => {
            ColorOfYearSteps.mouse_click_see_in_room();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM TYPE',() => {
            ColorOfYearSteps.mouse_click_room_type();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM SPACE',() => {
            ColorOfYearSteps.mouse_click_room_space();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
            ColorOfYearSteps.mouse_click_info_icon();
         });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
        //     ColorOfYearSteps.mouse_click_info_icon();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     ColorOfYearSteps.mouse_click_see_in_room();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
        //     ColorOfYearSteps.mouse_click_room_type();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
        //     ColorOfYearSteps.mouse_click_room_space();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
        //     ColorOfYearSteps.mouse_click_info_icon();
        //  });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': COLOR NAME IS VISIBLE', () => {
             assert.is_element_displayed(ColorOfYearPage.text_Cushing_Green);
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
