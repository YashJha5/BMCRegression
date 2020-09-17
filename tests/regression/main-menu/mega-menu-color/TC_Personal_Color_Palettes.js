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
const YourPersonalPalettesSteps = require('../../../../steps/YourPersonalPalettesSteps.js');
const YourPersonalPalettesPage = require('../../../../pages/YourPersonalPalettesPage.js');
//New added 
const LoginPageSteps = require('../../../../steps/LoginPageSteps.js');

const data = require('../../../../rsc/test_data_main_menu.json');
//const { browser } = require('../../../../setup.js');
const { browser } = require('protractor');

let common_data = utils.load_property_file('default');
//let domain = browser.params.env_us.staging;

let tc_name = 'TC_Personal_Color_Palettes';

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
           YourPersonalPalettesSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color);      
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON LINK: COLOR INSIGHT',() => {
           YourPersonalPalettesSteps.mouse_hover_on_color_insight(common_data.main_menu_index)
        });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON LINK: READ MORE BUTTON UNDER YOUR PERSONAL PALETTES',() => {
          YourPersonalPalettesSteps.mouse_click_on_read_more();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON LINK: INFO ICON',() => {
          YourPersonalPalettesSteps.mouse_click_info_icon();
        });
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE CLICK ON: ADD TO FAVOURITE',() => {
            YourPersonalPalettesSteps.mouse_click_add_to_favourite();
        }); 

        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK:SIGN IN ',() => {
            YourPersonalPalettesSteps.mouse_click_sign_in_lnk();
        });

        executeStep('STEP ' + global.step_counter++ + ': PROCESS: LOGIN', () => {
            LoginPageSteps.process_login(test_data.username, test_data.password);
            browser.sleep(20000);
        });
        
        
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: SAVE TO MY ITEMS BUTTON ',() => {
            YourPersonalPalettesSteps.mouse_click_my_items_btn();
        });

        
        //        executeStep('ASSERT ' + global.assert_counter++ + ': ADDED ITEM APPEARS ', () => {
        //      assert.is_element_displayed(YourPersonalPalettesPage.added_item);
        //      //browser.sleep(2000)
        // });       
        
        });
    
       
    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
