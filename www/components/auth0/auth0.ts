/// <reference path="../../../typings/tsd.d.ts" />

require('auth0-angular');

export default angular.module('app.auth0', [
    'auth0',
    require('angular-storage'),
    require('angular-jwt'),
])
    .config(Auth0Config)
    .run(Auth0Run)
    .controller('Auth0Controller', Auth0Controller);

Auth0Run.$inject = ['auth'];

function Auth0Run(auth) {
    auth.hookEvents();
}

Auth0Config.$inject = ['authProvider'];

function Auth0Config(authProvider) {
    authProvider.init({
  	domain: 'louislarry.auth0.com',
  	clientID: 'yrZ74GnnkjNpjKDbWlLPVtMkyTetcwm7',
        callbackUrl: location.href,
        loginState: 'login'
    });
}

Auth0Controller.$inject = ['$http', 'auth', 'store', '$location'];

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
