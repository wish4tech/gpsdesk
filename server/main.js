'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var express = require('express');
var config = require('./config');
var port = process.env.PORT || config.port;
var app = module.exports = express();
var http = require('http-raw')(app);
var mongoP = require('./mongo-promises');
require('./express')(app);
require('./routes')(app);

if (process.env.NODE_ENV === 'development') {
    app.use(express.static(config.root + '/app'));
}

mongoP.init().then(function() {
    http.listen(port, function() {
        console.log('gpsdesk-Server listening on port ' + port);
    });
});
