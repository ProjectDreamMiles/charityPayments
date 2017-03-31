
angular.module('checkPayment.paymenthistory', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    "ngInject";
  $routeProvider.when('/paymenthistory', {
    templateUrl: 'paymenthistory/paymenthistory.html',
    controller: 'PaymentHistoryCtrl'
  });
}])

.controller('PaymentHistoryCtrl', function($scope, CheckAPI) {

  CheckAPI.getPaidChecks().then(function(res){
    $scope.checks = res.data;
  }, function(err){
    console.log('error:', err)
  });

});