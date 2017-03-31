/**
 * Created by nope on 2/17/17.
 */
angular.module('checkProcessing.phServices', [])
.factory('PHAPI', ['$http', 'SERVER_HOST', '$rootScope', function($http, SERVER_HOST, $rootScope){
    "ngInject";



    return {
        getPaidChecks: function(){
            return $http.get(SERVER_HOST+'getPaidChecks');
        }

    }
}]);