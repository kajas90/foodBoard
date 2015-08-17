'use strict';

angular.module('myApp.restaurantList', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurantList', {
    templateUrl: 'restaurantList/restaurantList.html',
    controller: 'restaurantListCtrl'
  });
}])

.controller('restaurantListCtrl', function($rootScope, $scope, $location, $routeParams) {
  $scope.variable = "Our tekst";
  $scope.progress = 65;

  $scope.showText = function() {
    alert($scope.variable);
  }

  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'jakisTytul',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      logo : 'LOGO',
      name : 'u Skrzypka',
      type : 'Pizzeria'
    },
    {
      title: 'tytul2',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      logo : 'LOGO',
      name : 'SurfBurger',
      type : 'Burger'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  $scope.routeToAdd=function(){
    $location.path('/restaurantAdd');
  };

});