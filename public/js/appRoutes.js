angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/club', {
			templateUrl: 'views/club.html',
			controller: 'ClubController'
		})

		.when('/sponsor', {
			templateUrl: 'views/sponsor.html',
			controller: 'SponsorController'
		})

		.when('/about', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/teams', {
			templateUrl: 'views/home.html/#teams',
			controller: 'MainController'
		})

		.when('/notice', {
			templateUrl: 'views/home.html/#notice',
			controller: 'MainController'
		})

		.when('/contact', {
			templateUrl: 'views/home.html/#contact',
			controller: 'MainController'
		});

	$locationProvider.html5Mode(true);

}]);
