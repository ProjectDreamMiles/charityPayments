
angular.module('checkPayment.paymenthistory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    "ngInject";
  $routeProvider.when('/paymenthistory', {
    templateUrl: 'paymenthistory/paymenthistory.html',
    controller: 'PaymentHistoryCtrl'
  });
}])

.controller('PaymentHistoryCtrl', function() {

  var paidChecks = [];
    var test = {};

  // PHAPI.getPaidChecks()
  //     .then(function successCallback(response){
  //         console.log('getPaidChecks success cb- result: ' + JSON.stringify(response));
  //         paidChecks = response.data;
  //     }, function errorCallback(response){
  //         console.log('getPaidChecks err cb- result: ' + JSON.stringify(response));
	//
  //     })

});