'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mapSchema = new Schema({
    name: String,
    latitude: { type: String },
    longitude: { type: String },
    zoom: Number,
    marker_id: Number
});


var MapData = mongoose.model('MapData', mapSchema, 'MapCollection');

module.exports = MapData;
