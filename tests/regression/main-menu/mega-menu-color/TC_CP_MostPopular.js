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
const CP_MostPopularSteps = require('../../../../steps/CP_MostPopularSteps.js');
const CP_MostPopularPage = require('../../../../pages/CP_MostPopularPage.js');

const data = require('../../../../rsc/test_data_main_menu.json');
const { browser } = require('../../../../setup.js');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_CP_MostPopular';

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
           CP_MostPopularSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: COLOR PALETTES',() => {
           CP_MostPopularSteps.mouse_hover_on_color_palettes(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE MOST POPULAR COLORS',() => {
          CP_MostPopularSteps.mouse_click_on_see_most_popular_color();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: EXPLORE COLOR FAMALIES BUTTON',() => {
          CP_MostPopularSteps.mouse_click_on_explore_color_fam();
        }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE A DIRECTION PAGE COLOR',() => {
            CP_MostPopularSteps.mouse_click_color();
          }); 
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE A SHADE OF RED ',() => {
            CP_MostPopularSteps.mouse_click_color_shade();
          });  
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE A COLOR ',() => {
            CP_MostPopularSteps.mouse_click_choose_color();
         });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:SEE IN ROOM ICON ',() => {
            CP_MostPopularSteps.mouse_click_see_in_room();
        });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:CHOOSE ROOM TYPE',() => {
            CP_MostPopularSteps.mouse_click_room_type();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CHOOSE ROOM SPACE',() => {
            CP_MostPopularSteps.mouse_click_room_space();
         });

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: CLICK ON INFO ICON',() => {
            CP_MostPopularSteps.mouse_click_info_icon();
         });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SEE A ROOM',() => {
        //     CP_MostPopularSteps.mouse_click_see_in_room();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM TYPE',() => {
        //     CP_MostPopularSteps.mouse_click_room_type();
        //  });

        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: ROOM SPACE',() => {
        //     CP_MostPopularSteps.mouse_click_room_space();
        //  });
        
        // executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: INFO ICON',() => {
        //     CP_MostPopularSteps.mouse_click_info_icon();
        //  });
        
        executeStep('ASSERT ' + global.assert_counter++ + ': COLOR NAME IS VISIBLE', () => {
             assert.is_element_displayed(CP_MostPopularPage.text_color_name);
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
