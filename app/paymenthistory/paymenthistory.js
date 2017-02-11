'use strict';

angular.module('myApp.paymenthistory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/paymenthistory', {
    templateUrl: 'paymenthistory/paymenthistory.html',
    controller: 'PaymentHistoryCtrl'
  });
}])

.controller('PaymentHistoryCtrl', [function() {

}]);