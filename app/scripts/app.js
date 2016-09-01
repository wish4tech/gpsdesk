'use strict';

var app = angular.module('gpsdeskApp', ['ngRoute', 'uiGmapgoogle-maps'])

.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: ''
        })
        .otherwise({
            redirectTo: '/'
        });
});
