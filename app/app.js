'use strict';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'timer',
  'ui.bootstrap',
  'myApp.login',
  'myApp.restaurantList',
  'myApp.myTimer',
  'myApp.restaurantAdd',
  'myApp.version',
  'angular.filter',
  'myApp.order',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/restaurantList'});
}]);

