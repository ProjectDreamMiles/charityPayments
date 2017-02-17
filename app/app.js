

// Declare app level module which depends on views, and components
angular.module('checkProcessing', [
  'ngRoute',
  'checkProcessing.topay',
  'checkProcessing.paymenthistory',
    'checkProcessing.tpService',
    'checkProcessing.phServices',
  'ngMaterial',
  'ngAria',
  'ngAnimate',
    'ui.router',
    'ngAria',
    'ngCookies'
])

.constant('SERVER_HOST', 'http://192.168.0.12:5000/')

    .constant('CLIENT_HOST','http://localhost:8000/')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(['$window', function($window) {
            return {
                'request': function(config) {
                    config.headers.authorization = $window.localStorage.token;
                    return config;
                }
            };
        }]);
    }])
    .config(['$sceDelegateProvider', function($sceDelegateProvider){
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'https://google.drive.com/file/**'
        ]);
    }])
.config(function($locationProvider, $routeProvider) {
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
      .otherwise("#!/topay")
})
// .config(function($stateProvider, $urlRouterProvider) {
//     $stateProvider
//         .state('pay', {
//             url:'/toPay',
//             templateUrl: 'topay/topay.html',
//             controller: 'ToPayCtrl'
//
//         })
//
//         .state('app.accountInfo', {
//             url: '/accountInfo',
//             views: {
//                 'app-account': {
//                     templateUrl: 'templates/accountInfo.html',
//                     controller: 'AccountCtrl'
//                 }
//             }
//         })
// })

.controller('NavCtrl', function($scope, $window) {

  $scope.goToToPay = function () {
    $window.location.href = "#/topay";
  };

  $scope.goToPaymentHistory = function () {
    $window.location.href = "#/paymenthistory";
  };


});
