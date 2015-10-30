/// <reference path="../../typings/tsd.d.ts" />

require('angular-ui-router');

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routerConfig($stateProvider, $urlRouterProvider) {
    // redirect any unmatched url to /home
    $urlRouterProvider.otherwise('/home');

    // states
    $stateProvider
	.state('home', {
	    url: '/home',
	    template: require('../components/home/home.html'),
	    controller: 'HomeController as home'
	})
	.state('page2', {
	    url: '/page2',
	    template: require('../components/page2/page2.html'),
	    controller: 'Page2Controller as page2'
	})
	.state('aws', {
	    url: '/aws',
	    template: require('../components/aws/aws.html'),
	    controller: 'AwsController as aws'
	});
}
