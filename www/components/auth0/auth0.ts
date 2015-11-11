/// <reference path="../../../typings/tsd.d.ts" />

export default angular.module('app.auth0', [])
.controller('Auth0Controller', Auth0Controller)

Auth0Controller.$inject = ['$scope'];

function Auth0Controller($scope) {
this.myname = 'auth0';
}
