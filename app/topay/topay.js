'use strict';

angular.module('checkPayment.topay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/topay', {
    templateUrl: 'topay/topay.html',
    controller: 'ToPayCtrl'
  });
}])

.controller('ToPayCtrl', ['$scope', 'CheckAPI', function($scope, CheckAPI) {

  $scope.selectedChecks = []

  // Just testing to see if shit works
    $scope.test = 'test';
    $scope.charities = CheckAPI.test();
    // $scope.charities = ['charity 1', 'charity 2', 'charity 3'];

  CheckAPI.getUnpaidChecks().then(function(data, status){
    $scope.checks = data.data;
  })

  $scope.saveAsPaid = function(){
    var i;
    for(i=0; i<$scope.checks.length; i++){
      if($scope.checks[i].selected){
        $scope.selectedChecks.push($scope.checks[i]);
        console.log($scope.selectedChecks);

        //TODO: Set check as paid
        //TODO: Refresh list of paid checks by calling CheckAPI.getUnPaidChecks()

        $scope.checks[i].selected = false;
      }
    }
  }

}]);