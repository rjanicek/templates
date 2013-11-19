'use strict';

var _ = {
    filter: require('lodash.filter')
};
var glob = require('glob');
var nodeunit = require('nodeunit');
var reporter = nodeunit.reporters.default;

var pattern = process.argv.length === 3 ? process.argv[2] : '';

glob('scripts/**/*' + pattern + '*_test.js', function (er, files) {

    // There might be a way to do this in the glob pattern, but I couldn't find it.
    files = _.filter(files, function (file) { return file.indexOf('/node_modules/') === -1; });

    reporter.run(files, null, function () {
        process.exit();
    });
});