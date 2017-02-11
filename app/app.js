'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.topay',
  'myApp.paymenthistory',
  'myApp.version',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      // .when("/topay", {
      //   templateUrl : "topay/topay.html",
      //   controller: "ToPayCtrl"
      // })
      // .when("/paymenthistory", {
      //   templateUrl : "paymenthistory/paymenthistory.html",
      //   controller: "PaymentHistoryCtrl"
      // })
      .otherwise("/topay")
}])

.controller('NavCtrl', ['$scope', '$window', function($scope, $window) {

  $scope.goToToPay = function () {
    $window.location.href = "#!/topay";
  };

  $scope.goToToPay = function () {
    $window.location.href = "#!/topay";
  };

  $scope.goToPaymentHistory = function () {
    $window.location.href = "#!/paymenthistory";
  };

}]);
