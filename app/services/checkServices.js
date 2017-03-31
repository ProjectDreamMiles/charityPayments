/**
 * Created by Yesh on 3/30/17.
 */
angular.module('checkPayment.checkServices', [])


.factory('CheckAPI', ['SERVER_HOST', '$http', function(SERVER_HOST, $http){

		return {
				test: function(){
						return ['charity 1', 'charity 2', 'charity 3'];
				},
				getUnpaidChecks: function(){
						return $http.get(SERVER_HOST + 'getUnpaidChecks',{
								method: 'GET'
						});
				},
				setCheckPaid: function(checks){
						return $http.post(SERVER_HOST + 'updateChecks', checks, {
								method:'POST',
								params: {
										userId: 'DreamRunTeam',
										userEmail: 'yesh@projectdreammiles.com'
								}
						})
				}
		}

}]);