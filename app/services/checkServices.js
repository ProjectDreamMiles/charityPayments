/**
 * Created by Yesh on 3/30/17.
 */
angular.module('checkPayment.checkServices', [])


.factory('CheckAPI',  function(SERVER_HOST, $http, $rootScope, $window){
		$rootScope.user = {};

		$rootScope.signIn = function(form){
			return $http.post(SERVER_HOST+'authentication/signin', form).then(function(scs){
				// console.log('sign scs: scs: ' + JSON.stringify(scs.data.token));
				$window.localStorage.token = scs.data.token;
				$rootScope.user = scs.data.user;
			}, function(err){
                console.log('sign err: err: ' + JSON.stringify(err));
			});
		};

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
										userId:$rootScope.user._id,
										email: $rootScope.user.email
								}
						})
				}
		}

});