'use strict';

var myApp3 = angular.module('myApp.restaurantAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurantAdd', {
    templateUrl: 'restaurantAdd/restaurantAdd.html',
    controller: 'restaurantAddCtrl'
  });
}])

.controller('restaurantAddCtrl',  function MyController($scope) {
       $scope.restauracje = [
            "Wege", "Burger", "Pizza", "Fastfood",
           "Azjatyckie"];
       $scope.wybrana = "";

   });



angular.module('ui.bootstrap',['ngRoute'])

    .controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'headerek1',
      content: 'content 1'
    },
    {
      title: 'Header - 2',
      content: 'Cont - 2'
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
});