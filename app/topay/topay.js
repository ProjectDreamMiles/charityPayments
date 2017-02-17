

angular.module('checkProcessing.topay', ['ngRoute', 'checkProcessing.tpService'])

.config(function($routeProvider) {
  $routeProvider.when('/topay', {
    templateUrl: 'topay/topay.html',
    controller: 'ToPayCtrl'
  });
})

.controller('ToPayCtrl', function($scope, PaymentAPI, $http, SERVER_HOST) {

  $scope.test = 'test';
  var unpaidChecks = [];

  $scope.charities = ['charity 1', 'charity 2', 'charity 3'];
    PaymentAPI.getUnpaidChecks().then(function successCallback(response){
      console.log('get unpaidChecks success cb- response: ' + JSON.stringify(response));
        unpaidChecks = response.data;
        console.log('unpaidChecks: ' + unpaidChecks);
  }, function errorCallback(response){
        console.log('getUnpaid checks error cb- response: ' + JSON.stringify(response));
    })


});