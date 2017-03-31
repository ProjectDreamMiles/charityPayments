'use strict';

// Declare app level module which depends on views, and components
angular.module('checkPayment', [
  'ngRoute',
  'checkPayment.topay',
  'checkPayment.paymenthistory',
  'checkPayment.version',
  'checkPayment.checkServices',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
      .otherwise("/topay")
}])

// .constant('SERVER_HOST','https://dreamrun.herokuapp.com/')
// .constant('SERVER_HOST','https://dreamrundevelopmenttest.herokuapp.com/')
.constant('SERVER_HOST','http://localhost:5000/')

.controller('NavCtrl', ['$scope', '$window', function($scope, $window) {

  $scope.goToToPay = function () {
    $window.location.href = "#!/topay";
  };

  $scope.goToPaymentHistory = function () {
    $window.location.href = "#!/paymenthistory";
  };

}]);
