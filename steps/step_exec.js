/*
    Created By: jefrydenny on 2017-08-11
    Last Update By: jefrydenny on 2018-01-11
*/

'use strict';
/* global allure */
/* global browser */

const testutils = require('../utils/testutils.js');

let executeStep = null;

if (typeof allure !== 'undefined') {
    executeStep = (name, step) => {
        allure.createStep(name, () => {
            testutils.logger().debug('Starting step: ${ name }');
            step();
            testutils.logger().debug('End step: ${ name }');
            browser.takeScreenshot().then((png) => {
                 allure.createAttachment(name, () =>
                     new Buffer(png, 'base64'), 'image/png')();
             });
        })();
    };
} else {
    executeStep = (name, step) => {
        testutils.logger().debug(`Starting step: ${name}`);
        step();
        testutils.logger().debug(`End step: ${name}`);
    };
}

module.exports = executeStep;
