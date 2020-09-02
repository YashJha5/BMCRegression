/*
    Created by jefrydenny on 2017-08-1
    Last Update: jefrydenny on 2017-09-26
*/

'use strict';

const assertion = require('chai').assert;
const expect = require('chai').expect;
const utils = require('../utils/utils.js');

let EC = protractor.ExpectedConditions;
let max_wait_time = jasmine.DEFAULT_TIMEOUT_INTERVAL;

exports.end_point = (str_end_point) => {
    utils.get_current_url(function (response) {
        assertion.include(response, str_end_point, str_end_point + " is not included in " + response);
    });
};

exports.new_tab_end_point = (str_end_point) => {
    browser.getAllWindowHandles().then(function (handles) {
        var newTabHandle = handles[1];
        browser.switchTo().window(newTabHandle).then(function () {
            utils.get_current_url(function (response) {
                assertion.include(response, str_end_point, str_end_point + " is not included in " + response);
            });
        });
    });
};

// exports.valid_end_point = (lst_end_point, currentPageUrl) => {
//     utils.get_current_url(function (response) {
//         console.log('Current Page Url: ' + response);
//         let message = "";
//         let bool_error = false;
//         if (response == currentPageUrl) {
//             bool_error = true;
//             message = "Not redirected To: " + response;
//         }
//         else if (response.includes(lst_end_point.PageNotFound)) {
//             bool_error = true;
//             message = "Page Not Found: " + response;
//         }
//         else if (response.includes(lst_end_point.InternalServerError)) {
//             bool_error = true;
//             message = "Internal Server Error: " + response;
//         }
//         assertion.isFalse(bool_error, message);
//     });
// };

exports.get_label_message = (locator, callback) => {
    browser.wait(EC.visibilityOf(locator), max_wait_time);
    locator.getText().then(function (response) {
        callback(response);
    });
};

// Asserts - Compare two specified Strings
exports.string_compare = (str_expected, str_actual, str_custom_msg) => {
    let str_default_msg = "Compare two specified Strings";

    if (str_custom_msg === '' || str_custom_msg === undefined) {
        assertion.equal(str_expected, str_actual, "Assertion: " + str_default_msg);
    } else {
        assertion.equal(str_expected, str_actual, "Assertion: " + str_custom_msg);
    }
};

// Asserts - Compare two specified Strings ignoring the case
exports.string_compare_ignore_case = (str_expected, str_actual) => {
    str_expected = str_expected.toUpperCase();
    str_actual = str_actual.toUpperCase();
    assertion.equal(str_expected, str_actual, "Assertion: Compare two specified Strings ignoring the case");
};

// Asserts - Compare two values
exports.value_compare = (num_expected, num_actual) => {
    assertion.equal(num_expected, num_actual, "Assertion: Compare two number values");
};

// Asserts - Specified String Parameter is included
exports.include = (str_to_search, str_to_look_from) => {
    str_to_search = str_to_search.toUpperCase();
    str_to_look_from = str_to_look_from.toUpperCase();
    assertion.include(str_to_search, str_to_look_from, str_to_look_from + " is not included in " + str_to_search);
};

// Asserts - validate array contains element
exports.array_should_include = (array, exp_element) => {
    array.forEach(function (act_element) {
        assertion.include(act_element, exp_element, exp_element + " is not included.");
    });
}

// Asserts - validate two array are equal
exports.array_should_be_equal = (array1, array2) => {
    expect(array1).to.have.members(array2);
}

// Asserts - Compare two specified values
exports.price_compare = (float_expected, float_actual) => {
    float_expected = parseFloat(float_expected);
    float_actual = parseFloat(float_actual);
    // console.log(float_expected + " is lower than " + float_actual);
    assertion.isBelow(float_expected, float_actual, "Assertion: Expected is Higher than");
};

// Asserts - Compare two specified values
exports.is_greater = (int_expected, int_actual) => {
    let expected = parseInt(int_expected);
    let actual = parseInt(int_actual);
    assertion.isAbove(expected, actual, "Assertion: Expected is Lower than");
};

//TODO: Asserts the Presence (present on the page) of the specified Element
exports.isEnglish = (txt_actual_language) => {
    assertion.equal('en', txt_actual_language, "Expected Element is Present");
};

//TODO: Analyze and Create this type of assertion
exports.pageFound = () => {
    let bool_error = false;
    browser.getTitle().then(function (resp_page_title) {
        bool_error = resp_page_title.includes('404' || '500');
        assertion.isFalse(bool_error, "Assertion: Page is Found");
    });
};

// Asserts an element is invisible or not present on the DOM
exports.is_invisible = (element_specified) => {
    browser.wait(EC.invisibilityOf(element_specified), max_wait_time);
};

// Asserts an element is present on the DOM of a page and visible.
exports.is_visible = (element_specified) => {
    browser.wait(EC.visibilityOf(element_specified), max_wait_time);
};

// Asserts - Specified Parameter is NOT empty
exports.text_not_empty = (str_text) => {
    expect(str_text).to.not.be.empty;
};

// Asserts the specified attribute Value
exports.attributeValue = (expected_element, actual_text, attribute_value) => {
    expected_element.getAttribute(attribute_value).then(function (actual_result) {
        assertion.strictEqual(actual_text, actual_result, "Assertion: Attribute Value");
    });
};

// Asserts the specified Message is displayed
exports.isMessageDisplayed = (expected_element, expected_text) => {
    expected_element.getText().then(function (actual_result) {
        assertion.strictEqual(expected_text, actual_result, "Assertion: Message is Displayed");
    });
};

// Asserts the Presence (present on the code) of the specified Element
exports.is_elem_present = (expected_element) => {
    expected_element.isPresent().then(function (expected_result) {
        assertion.isOk(expected_result, "Expected Element is Present");
    });
};

// Asserts the Presence (present on the code) of the specified Element
exports.is_element_present = (expected_element, callback) => {
    expected_element.isPresent().then(function (expected_result) {
        callback(assertion.isOk(expected_result, "Element is Missing"));
    });
};

// Asserts the Visibility (present on the page) of the specified Element
exports.is_element_displayed = (expected_element) => {
    browser.wait(EC.visibilityOf(expected_element), max_wait_time);
    expected_element.isDisplayed().then(function (expected_result) {
        assertion.isOk(expected_result, "Expected Element is Displayed");
    });
};

// Asserts the  (present on the page) of the specified Element
exports.is_element_selected = (expected_element, callback) => {
    expected_element.isSelected().then(function (expected_result) {
        console.log("Is it selected: ", expected_result);
        callback(expected_result);
    });
};

// Asserts the Absence (not present on the page) of the specified Element
exports.isElementNotPresent = (expected_element) => {
    expect(expected_element).isPresent().toBe(false);
};

// Asserts - Specified List Parameter is included
exports.is_included_in_list = (lst_to_look_from, lst_length, str_to_search) => {
    let bool_error = true;
    for (var x = 0; x < lst_length; x++) {
        if (lst_to_look_from[x] == str_to_search) {
            bool_error = false;
            assertion.include(str_to_search, lst_to_look_from[x], lst_to_look_from[x] + " is not included in " + str_to_search);
        }
    }
    assertion.isFalse(bool_error, "Assertion: " + str_to_search + " is not included in list");
};
