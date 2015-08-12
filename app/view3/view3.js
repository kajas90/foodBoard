'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl',  function MyController($scope) {
       $scope.restauracje = [
            "Wege", "Burger", "Pizza", "Fastfood",
           "Azjatyckie"];
       $scope.wybrana = "";
       $scope.objekt = {
        'name' : 'maciej',
        'imie' : 'łysy'
       };
   });



