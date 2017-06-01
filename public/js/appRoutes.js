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
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/notice', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/contact', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/incredibles', {
			templateUrl: 'views/teams.html',
			controller: 'TeamController'
		})

		.when('/immortals', {
			templateUrl: 'views/teams.html',
			controller: 'TeamController'
		})

		.when('/invincibles', {
			templateUrl: 'views/teams.html',
			controller: 'TeamController'
		});

	$locationProvider.html5Mode(true);

}]);
