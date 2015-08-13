'use strict';

angular.module('myApp.restaurantList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurantList', {
    templateUrl: 'restaurantList/restaurantList.html',
    controller: 'restaurantListCtrl'
  });
}])

.controller('restaurantListCtrl', [function() {

}]);

