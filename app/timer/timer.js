'use strict';

angular.module('myApp.timer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/timer', {
    templateUrl: 'timer/timer.html',
    controller: 'timerCtrl'
  });
}])

.controller('timerCtrl', [function() {

}]);