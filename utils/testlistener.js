'use strict';

/**
    Created by jefry.denny on 2017-06-16
*/

const fs = require('fs');

function Listener(outputbasedir) {
    const self = this;
    self.outputbasedir = outputbasedir;

    self.specStarted = (result) => {
        global.specName = result.fullName;

        const specContext = {
            specname: result.fullName,
            logfile: '',
        };
        global.specContext = specContext;

        global.specContext.specname = result.description;

        let fit = 0;
        let filename = `${self.outputbasedir}/logs/${global.specContext.specname}_${fit}.log`;

        while (fs.existsSync(filename)) {
            fit++;
            filename = `${self.outputbasedir}/logs/${global.specContext.specname}_${fit}.log`;
        }
        global.specContext.logfile = filename;
    };
    self.specDone = () => {
        if (typeof allure !== 'undefined') {
            allure.createAttachment(global.specName, () => {
                return fs.readFileSync(global.specContext.logfile).toString();
            }, 'text')();
        }
    };
}

module.exports = Listener;
