

angular.module('checkPayment.topay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/topay', {
    templateUrl: 'topay/topay.html',
    controller: 'ToPayCtrl'
  });
}])

.controller('ToPayCtrl', function($scope, CheckAPI, $window, $rootScope) {

  $scope.selectedChecks = [];

  // Just testing to see if shit works
    $scope.test = 'test';
    $scope.charities = CheckAPI.test();
    // $scope.charities = ['charity 1', 'charity 2', 'charity 3'];

    $rootScope.signIn({email: 'ychillakuru@gmail.com', password: 'yc'});

  CheckAPI.getUnpaidChecks().then(function(res){
    $scope.checks = res.data;
    console.log('getUnpaidChecks scs: ' + JSON.stringify(res));
  }, function(err){
    console.log('error:', err)
  });


  $scope.saveAsPaid = function(){
    var i;
    for(i=0; i<$scope.checks.length; i++){
      if($scope.checks[i].selected){
        $scope.selectedChecks.push($scope.checks[i]);

        $scope.checks[i].selected = false;
      }
    }

    CheckAPI.setCheckPaid($scope.selectedChecks).then(function(res){
      console.log('setCheckPaid succeeded: ', res);

      // Clear selected Checks Array
      $scope.selectedChecks = [];
      // Refresh page to refresh checks object
      $window.location.reload()

    }, function(err){
      console.log('setCheckPaidFailed', err);
      $scope.selectedChecks = [];
      $window.location.reload()
    })

  }

});