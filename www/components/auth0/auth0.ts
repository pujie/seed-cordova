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
  	// clientId: 'yrZ74GnnkjNpjKDbWlLPVtMkyTetcwm7',
  	clientID: 'yrZ74GnnkjNpjKDbWlLPVtMkyTetcwm7',
        callbackUrl: location.href,
        loginState: 'auth0',
	// sso: true,
    });

    authProvider.on('authenticated', ['$location', function($location) {
	console.log('on authenticated');
    }]);

    authProvider.on('loginSuccess',
		    ['profilePromise', 'idToken', '$location', 'store',
		     function(profilePromise, idToken, $location, store) {
			 console.log('on loginSuccess');
			 profilePromise.then( profile => {
			     store.set('profile', profile);
			     store.set('token', idToken);

			 });
			 $location.path('/');
		     }]);

    authProvider.on('loginFailure', ['error', '$location', function (error, $location) {
	console.log('loginFailure');
	$location.path('/error');
    }]);

    authProvider.on('logout', () => {
	console.log('on logout');
    });

    authProvider.on('forbidden', () => {
	console.log('on forbidden');
    });
}

successCb.$inject = ['profilePromise', 'idToken', '$location', 'store'];
function successCb (profilePromise, idToken, $location, store) {
    console.log('successCb');
}

errorCb.$inject = ['err', '$location'];
function errorCb (err, $location) {
    console.log('errorCb');
}

Auth0Controller.$inject = ['$http', 'auth', 'store', '$location'];

function Auth0Controller($http, auth, store, $location) {
    this.profile = auth.profile;
    this.isAuthenticated = auth.isAuthenticated;

    this.login = () => {
	auth.signin({ popup: true }, successCb, errorCb);
    }

    this.signup = () => {
	console.log('Auth0Controller signup');
	auth.signup({ popup: true }, successCb, errorCb);
    }

    this.reset = () => {
	console.log('Auth0Controller logout');
	auth.reset({ popup: true }, successCb, errorCb);
    }

    this.logout = () => {
	console.log('Auth0Controller logout');
	auth.signout();
    }

    this.login();
}
