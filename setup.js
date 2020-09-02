/*
 	Created By: jefrydenny on 2017-11-11
*/

'use strict';

// Browser Width and Height Setup
exports.browser = (global_window_width, global_window_height) => {
		browser.ignoreSynchronization = true;
    browser.driver.manage().timeouts().implicitlyWait(8000);
    browser.driver.manage().window().setSize(global_window_width, global_window_height);
    browser.get("/");
};
