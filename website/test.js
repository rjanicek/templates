/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, esversion: 6, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

const _ = require('lodash');
const glob = require('glob');
const nodeunit = require('nodeunit');
const reporter = nodeunit.reporters.default;

const pattern = process.argv.length === 3 ? process.argv[2] : '';

glob(`scripts/**/*${pattern}*_test.js`, (error, files) => {

    // There might be a way to do this in the glob pattern, but I couldn't find it.
    files = _.filter(files, file => file.indexOf('/node_modules/') === -1);

    reporter.run(files, null, () => {
        process.exit();
    });
});