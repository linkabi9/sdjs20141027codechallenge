angular
	.module('codechallenge', ['ngResource', 'ui.router', 'ui.bootstrap'])
	.config(function($stateProvider, $urlRouterProvider) {

		// Now set up the states
		$stateProvider
			.state('list', {
				url: "/",
				templateUrl: "views/list.html"
			});
		
		// For any unmatched url, redirect to /
		$urlRouterProvider.otherwise("/");
		
	});;