/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var core = require('../core/core.js');
var component = require('./component/component');

console.log('A new project!');
document.body.innerHTML += component();
