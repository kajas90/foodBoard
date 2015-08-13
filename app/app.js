'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'myApp.restaurantList',
  'myApp.timer',
  'myApp.restaurantAdd',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/restaurantList'});
}]);