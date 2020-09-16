'use strict';

const HomePage = require('../pages/HomePage.js');
//const RegistrationPage = require('../pages/RegistrationPage.js');
const utils = require('../utils/utils.js');
const executeStep = require('../steps/step_exec.js');
const assert = require('../utils/assert.utils.js');
const { By } = require('protractor');
const prot = require('protractor');
// const { browser } = require('../setup.js');

let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;

/////BM.com
exports.process_login = (str_name, str_pswd) => {
    set_username(str_name);
    set_password(str_pswd);
    click_sign_in();
};

/////BM.com
function click_sign_in(){
    browser.wait(EC.elementToBeClickable(HomePage.btn_sign_in), max_wait_time);
    HomePage.btn_sign_in.click();
};

/////BM.com
function set_username(str_name){
    browser.wait(EC.elementToBeClickable(HomePage.txt_user_name), max_wait_time);
    HomePage.txt_user_name.clear();
    HomePage.txt_user_name.sendKeys(str_name);
};
/////BM.com
function set_password(str_pswd){
    browser.wait(EC.elementToBeClickable(HomePage.txt_password), max_wait_time);
    HomePage.txt_password.clear();
    HomePage.txt_password.sendKeys(str_pswd);
    browser.sleep(2000);
    HomePage.txt_password.sendKeys(prot.Key.ENTER);
    //browser.sleep(5000);
};
