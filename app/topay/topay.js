'use strict';

angular.module('myApp.topay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/topay', {
    templateUrl: 'topay/topay.html',
    controller: 'ToPayCtrl'
  });
}])

.controller('ToPayCtrl', ['$scope', function($scope) {

  $scope.test = 'test';

  $scope.charities = ['charity 1', 'charity 2', 'charity 3'];


}]);