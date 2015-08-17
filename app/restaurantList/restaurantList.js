'use strict';

angular.module('myApp.restaurantList', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurantList', {
    templateUrl: 'restaurantList/restaurantList.html',
    controller: 'restaurantListCtrl'
  });
}])

.controller('restaurantListCtrl', ['$scope', '$http', '$rootScope', '$location', '$routeParams', function($scope, $http, $rootScope, $location, $routeParams) {

      $http.get('js/data.json').success(function(data) {

          $scope.groups = data;

          console.log('poprawnie pobrano dane z js/data.json');
      });
      $http.get('js/data.json').error(function(data) {

        console.log('nie zaladowano js/data.json');
      });
      

  //accordion
  $scope.oneAtATime = true;

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

}]);