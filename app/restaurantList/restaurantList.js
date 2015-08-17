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
      


  $scope.oneAtATime = true;  //accordion


  $scope.routeToAdd=function(){
    $location.path('/restaurantAdd');
  };

}])


    //doklejanie tpl

    .directive('contactform', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/app/login/myTimer-tpl.html',
            controller: function () {
                console.log('jestem w dyrektywie contactform');
            }
        };
    })