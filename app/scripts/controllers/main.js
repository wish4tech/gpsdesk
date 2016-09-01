'use strict';

angular.module('gpsdeskApp').controller('MainController', ['$scope', 'DataService', function($scope, DataService) {
    $scope.map = {};
    $scope.marker = {};

    var request = {
        url: 'http://localhost:3000/fetchMapdata?name=maps/center_cordinates',
        method: 'get',
        data: null
    };
    DataService.makeRequest(request).then(function(mapResult) {
        $scope.map = { center: { latitude: mapResult.data.latitude, longitude: mapResult.data.longitude }, zoom: mapResult.data.zoom };
        $scope.marker = {
            id: mapResult.data.marker_id,
            coords: {
                latitude: mapResult.data.latitude,
                longitude: mapResult.data.longitude
            },
            options: { draggable: true }

        };
    });
}]);
