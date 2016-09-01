'use strict';

var _ = require('lodash');
var config = require('./config');
var MapController = require('./controllers/map');

var routes = [{
    path: '/fetchMapData',
    httpMethod: 'GET',
    middleware: [MapController.fetchMapData]
}];

module.exports = function(app) {
    _.each(routes, function(route) {
        var args = _.flatten([route.path, route.middleware]);
        switch (route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
        }
    });
};
