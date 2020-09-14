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
const ColorByRegionSteps = require('../../../../steps/ColorByRegionSteps.js');
const ColorByRegionPage = require('../../../../pages/ColorByRegionPage.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_Color_Region';

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
           ColorByRegionSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: COLOR PALETTES',() => {
           ColorByRegionSteps.mouse_hover_on_color_palettes(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE REGIONAL PALETTES BUTTON',() => {
          ColorByRegionSteps.mouse_click_on_regional_palettes_btn();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: REGION EXPLORE BUTTON',() => {
          ColorByRegionSteps.mouse_click_on_region_explore_btn();
        }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE A COLOR',() => {
            ColorByRegionSteps.mouse_click_choose_color();
        }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON GOES WITH BUTTON ',() => {
            ColorByRegionSteps.mouse_click_goes_with();
          });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE COLOR COMBINATION ',() => {
            ColorByRegionSteps.mouse_click_color_combination();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CLICK ON NEXT BUTTON ',() => {
            ColorByRegionSteps.mouse_click_next_btn();
        });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:SEE IN ROOM',() => {
            ColorByRegionSteps.mouse_click_see_in_room();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM TYPE',() => {
            ColorByRegionSteps.mouse_click_room_type();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM SPACE',() => {
            ColorByRegionSteps.mouse_click_room_space();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
            ColorByRegionSteps.mouse_click_info_icon();
         });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
        //     ColorByRegionSteps.mouse_click_info_icon();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     ColorByRegionSteps.mouse_click_see_in_room();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
        //     ColorByRegionSteps.mouse_click_room_type();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
        //     ColorByRegionSteps.mouse_click_room_space();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
        //     ColorByRegionSteps.mouse_click_info_icon();
        //  });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': COLOR NAME IS VISIBLE', () => {
             assert.is_element_displayed(ColorByRegionPage.text_black_satin);
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
