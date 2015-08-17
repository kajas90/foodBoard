'use strict';

angular.module('myApp.login', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', function($rootScope, $scope, $location, $routeParams) {

})

    .directive('contactforma', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/app/login/myTimer-tpl.html',
            controller: function () {
                console.log('jestem w dyrektywie contactform');
            }
        };
    })