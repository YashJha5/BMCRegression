/*
  	Created by: jefrydenny
  	Note: This is a work on progress; not yet implemented.
*/
'use strict';

const EC = protractor.ExpectedConditions;

exports.elementIsPresent = function (webE) {
	browser.wait((webE).isPresent());
	//browser.wait(element(by.css('.last-page')).getWebElement());
};

exports.IsClickAble = function (webE) {
    browser.wait(EC.presenceOf(webE), 10000);
    expect(webE.isPresent()).toBeTruthy();
};
