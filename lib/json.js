var Base = require('mocha').reporters.Base
    , cursor = Base.cursor
    , color = Base.color;
var log = require('./log');

exports = module.exports = JSONLoggerReporter;

function JSONLoggerReporter(runner) {
    var self = this;
    Base.call(this, runner);

    var passes = 0;
    var failures = 0;

    runner.on('pass', function(test){
        passes++;
        log.info('task pass: %s, %s', test.fullTitle(), new Date());
    });

    runner.on('fail', function(test, err){
        failures++;
        log.error('task fail: %s -- error: %s, %s', test.fullTitle(), err.message, new Date());
    });

    runner.on('pending', function(test){
        log.error('task pending: %s, %s', test.fullTitle(), err.message, new Date());
    });

    runner.on('end', function(){
        log.info('end: %d/%d', passes, passes + failures);
        process.exit(failures);
    });
}
