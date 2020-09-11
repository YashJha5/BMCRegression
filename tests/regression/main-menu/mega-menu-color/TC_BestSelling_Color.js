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
const BestSellingSteps = require('../../../../steps/BestSellingSteps.js');
const BestSellingPage = require('../../../../pages/BestSellingPage.js');

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
            BestSellingSteps.mouse_hover_on_main_menu_link(common_data.main_menu_index.color); 
            //console.log('value ' + common_data.main_menu_index.products);
            //browser.sleep(50000);     
        });
     
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER ON LINK: FIND YOUR COLOR',() => {
            BestSellingSteps.mouse_hover_on_find_your_color_link(common_data.main_menu_index)
         });
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: See Colors',() => {
            BestSellingSteps.mouse_hover_on_see_color();
                });    
    
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: BestSelling color',() => {
            BestSellingSteps.mouse_hover_BestSelling_white_color();
                }); 
        executeStep('STEP ' + global.step_counter++ +' : MOUSE HOVER AND CLICK ON LINK: Color info',() => {
            BestSellingSteps.mouse_hover_color_info();
                });   
        });
    
       
    afterEach(() => {
        utils.reset_counters();
    });

    afterAll(() => {
        utils.clean_up(tc_name);
    });

});
