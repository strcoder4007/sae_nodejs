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
		});

	$locationProvider.html5Mode(true);

}]);
