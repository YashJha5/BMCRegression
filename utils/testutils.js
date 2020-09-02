/**
 * Created by jefrydenny on 2017-06-16.
 */

'use strict';

const bunyan = require('bunyan');
exports.logger = () => {
    const logger = bunyan.createLogger({
        name: global.specContext.specname,
        streams:
        [
            {
                level: 'debug',
                path: global.specContext.logfile,
            },
        ],
    });
    return logger;
};
