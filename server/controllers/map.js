'use strict';

var mongoP = require('../mongo-promises');
var MapData = require('../schemas/MapSchema');
module.exports = {
    fetchMapData: function(req, res) {
        mongoP.getDocument(req.query.name, MapData).then(function(data) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(data);
        });
    }
};
