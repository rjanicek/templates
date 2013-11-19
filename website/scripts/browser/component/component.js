'use strict';

var rfile = require('rfile');
var html = rfile('./component.html');

module.exports = function () {
    return html;
};