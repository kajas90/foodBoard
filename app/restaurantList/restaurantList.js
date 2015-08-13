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

<<<<<<< Updated upstream
  $scope.showText = function() {
    alert($scope.variable);
  }
=======
}]).controller('RestaurantListController', function($rootScope, $scope, $location, $routeParams) {
      $scope.variable = "Our tekst";
      $scope.progress = 65;

      $scope.showText = function() {
        alert($scope.variable);
      }

      $scope.oneAtATime = true;

      $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
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


      $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
      };


    });
>>>>>>> Stashed changes

  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'jakisTytul',
      content: 'LOremImpusumeusdbgaid fsaISJFn KSFJKN SFJKKN SDKFJSDN DSK NKSDNFJSDN FSO',
      logo : 'LOGO',
      name : 'u Skrzypka',
      type : 'Pizzeria'
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