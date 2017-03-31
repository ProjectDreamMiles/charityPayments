'use strict';

angular.module('checkPayment.paymenthistory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/paymenthistory', {
    templateUrl: 'paymenthistory/paymenthistory.html',
    controller: 'PaymentHistoryCtrl'
  });
}])

.controller('PaymentHistoryCtrl', [function() {

}]);