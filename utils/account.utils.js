/*
    Created by jefrydenny on 2017-07-28
*/

'use strict';

const HomePage = require('../pages/HomePage.js');

//Generates a random email for account creation.
exports.randomEmail = () => {
    let result = '';
    const chars = 'abcdefghijklmnop0123456789';
    for (let i = 16; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    result += '@yopmail.com';
    return result;
};

//Generate and Returns a random number
exports.randomItem = (maxNum) => {
    let min = 1;
    return Math.floor(Math.random() * (maxNum - 1)) + min;      //Returns a random integer between min and max
};

//Gets and returns the initial language content from the tag <head/meta>
exports.get_init_language = (callback) => {
    HomePage.default_language.getAttribute('content').then(function(contentValue){
    return callback(contentValue);
    });
};

//Gets and returns the current url
exports.get_current_url = (callback) => {
    browser.getCurrentUrl().then(function(current_url){
    return callback(current_url);
    });
};
