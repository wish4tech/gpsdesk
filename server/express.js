'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var engines = require('consolidate');
var path = require('path');
var config = require('./config');

module.exports = function(app) {
    app.set('showStackError', true);
    app.locals.pretty = true;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
};
