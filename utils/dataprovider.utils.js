/*
    Created by jefrydenny on 2017-06-27.
    Note: This is a work on progress; not yet implemented
*/

'use strict';

const fs = require('fs');

exports.dataprovider = function (filename) {
    const contents = fs.readFileSync(filename);
    const jsonContent = JSON.parse(contents);
    return jsonContent;
};
