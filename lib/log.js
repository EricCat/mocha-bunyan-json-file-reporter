var bunyan = require('bunyan');
var moment = require('moment');

function logger() {
    var dir = __dirname + '/../logs/' + moment().format('YYYY-MM-DD') + '/';
    return bunyan.createLogger({
        name: 'mocha-bunyan-json-reporter',
        stream: [
            {
                level: 'info',
                path: dir + 'info.log'
            },
            {
                level: 'error',
                path: dir + 'error.log'
            }
        ]
    });
}
exports.logger = logger;