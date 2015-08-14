'use strict';

var myApp3 = angular.module('myApp.restaurantAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurantAdd', {
    templateUrl: 'restaurantAdd/restaurantAdd.html',
    controller: 'restaurantAddCtrl'
  }).when('/login', {
      templateUrl : '/app/login/login.html'
  });
}])

.controller('restaurantAddCtrl',  function MyController($scope) {
       $scope.restauracje = [
            "Wege", "Burger", "Pizza", "Fastfood",
           "Azjatyckie"];
       $scope.wybrana = "";

   });


