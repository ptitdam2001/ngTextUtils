'use strict';

angular.module('myApp', ['ngRoute', 'ptitdam2001.textUtils']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);

        $routeProvider
            .when('/home', {
                templateUrl: 'demo/app.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
        $scope.numChars = 20;
        $scope.numWords = 5;
        $scope.breakOnWord = false;
    }])

;