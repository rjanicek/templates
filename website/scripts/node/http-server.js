/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var HTTP_SERVER_PORT = 8080;

var browserify = require('browserify-middleware');
var compression = require('compression');
var express = require('express');
var path = require('path');

var PUBLIC_PATH = path.join(__dirname, '../../public');

var app = express();
app.use(compression());
app.use(express.static(PUBLIC_PATH));
app.get('/index.js', browserify(path.join(__dirname, '../browser/index.js'), { transform: ['brfs'] }));
app.listen(HTTP_SERVER_PORT);