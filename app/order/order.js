'use strict';

angular.module('myApp.order', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'order/order.html',
    controller: 'OrderController'
  });
}])

.controller('OrderController', function($rootScope, $scope, $location, $routeParams) {

});