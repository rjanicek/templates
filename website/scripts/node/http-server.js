'use strict';

var HTTP_SERVER_PORT = 8080;

var path = require('path');
var express = require('express');
var browserify = require('browserify-middleware');

var PUBLIC_PATH = path.join(__dirname, '../../public');

var app = express();
app.use(express.compress());
app.use(express.static(PUBLIC_PATH));
app.get('/index.js', browserify('../browser/index.js', { transform: ['rfileify'] }));
app.listen(HTTP_SERVER_PORT);