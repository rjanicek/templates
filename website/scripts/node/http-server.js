/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, esversion: 6, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

const HTTP_SERVER_PORT = 80;

const browserifyMiddleware = require('browserify-middleware');
const babelify = require('babelify');
const compression = require('compression');
const express = require('express');
const path = require('path');

const PUBLIC_PATH = path.join(__dirname, '../../public');

const app = express();
app.use(compression());
app.use(express.static(PUBLIC_PATH));

// use only while developing, comment out and use 'npm build' for best performance
app.get('/index.js', browserifyMiddleware(path.join(__dirname, '../browser/index.js'), {
	transform: [
		'brfs',
		[babelify, {presets: ['latest']}]
	]
}));


app.listen(HTTP_SERVER_PORT);