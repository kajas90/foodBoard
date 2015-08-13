'use strict';

angular.module('myApp.myTimer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/myTimer', {
    templateUrl: 'myTimer/myTimer.html',
    controller: 'myTimerCtrl'
  });
}])

.controller('myTimerCtrl', [function() {

}]);