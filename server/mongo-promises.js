'use strict';

var Q = require('q');
var config = require('./config');
var MapData = require('./schemas/MapSchema');
var MONGO = config.MONGO;
var MongoClient = require('mongoose').connect(MONGO.SCHEME + '://' + MONGO.HOST + '/' + MONGO.GPSDESKMASTERDB);
var initialized = false;
var initDeferred = Q.defer();

module.exports = {
    init: function() {
        if (initialized === true) {
            return initDeferred.promise;
        }
        initialized = true;
        // This is just to test to save data
        /* var mapMarker = new MapData({
             name: 'maps/center_cordinates',
             latitude: '40.1451',
             longitude: '-99.6680',
             zoom: 4,
             marker_id: 0
         });

         mapMarker.save(function(err) {
             if (err) throw err;
             console.log('User saved successfully!');
         });*/
        initDeferred.resolve();
        return initDeferred.promise;
    },
    getDocument: function(name, schema) {
        var deferred = Q.defer();
        schema.findOne({ name: name }, function(err, result) {
            if (err) throw err;
            console.log(result);
            deferred.resolve(result);
        });

        return deferred.promise;
    }
};
