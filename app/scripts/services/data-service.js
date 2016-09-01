'use strict';

angular.module('gpsdeskApp')
    .service('DataService', ['$q', '$http',
        function DataService($q, $http) {
            this.makeRequest = function(request) {
                var deferred = $q.defer();
                $http({
                    method: request.method,
                    url: request.url,
                    data: request.data
                }).then(function Success(data) {
                    console.log("Response ::> " + JSON.stringify(data));
                    deferred.resolve(data);
                }, function Error(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };

        }
    ]);
