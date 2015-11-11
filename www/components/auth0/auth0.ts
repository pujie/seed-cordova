/// <reference path="../../../typings/tsd.d.ts" />

export default angular.module('app.auth0', [
    'auth0',
    require('angular-storage'),
    require('angular-jwt'),
])
    .config(function(authProvider) {
	authProvider.init({
	    domain: 'louislarry.auth0.com',
	    clientID: 'yrZ74GnnkjNpjKDbWlLPVtMkyTetcwm7',
	});
    })
    .run(function(auth) {
	auth.hookEvents();
    })
    .controller('Auth0Controller', Auth0Controller);

function Auth0Controller($http, auth, store, $location) {
    this.login = () => {
	auth.signin({}, (profile, token) => {
	    store.set('profile', profile);
	    store.set('token', token);
	    $location.path('/');
	}, function() {
	    // Error callback
	});
    }

    this.logout = () => {

    }
}

Auth0Controller.$inject = ['$http', 'auth', 'store', '$location'];
