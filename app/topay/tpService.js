/**
 * Created by nope on 2/17/17.
 */
angular.module('checkProcessing.tpService', ['ngRoute'])

.factory('PaymentAPI', function($http, SERVER_HOST){


    var unpaidChecks = [];

    return {
        getUnpaidChecks: function(){
            return $http.get(SERVER_HOST+'getUnpaidChecks');

        }
    }
})