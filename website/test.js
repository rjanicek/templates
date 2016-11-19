/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, esversion: 6, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

const glob = require('glob');
const path = require('path');

const pattern = process.argv.length === 3 ? process.argv[2] : '';

glob(`scripts/**/*${pattern}*_test.js`, { ignore: '**/node_modules/**' }, (error, files) => {
	files.forEach(x => require(path.resolve(process.cwd(), x)));
});
