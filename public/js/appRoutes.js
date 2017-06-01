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
		.when('/incredibles2017', {
			templateUrl: 'views/incredibles2017.html',
			controller: 'TeamController'
		})
		.when('/incredibles2016', {
			templateUrl: 'views/incredibles2016.html',
			controller: 'TeamController'
		})
		.when('/IncrediblesSponsors', {
			templateUrl: 'views/incrediblesSponsors.html',
			controller: 'SponsorController'
		})


		.when('/immortals', {
			templateUrl: 'views/teams.html',
			controller: 'TeamController'
		})
		.when('/immortals2017', {
			templateUrl: 'views/immortals2017.html',
			controller: 'TeamController'
		})
		.when('/immortals2016', {
			templateUrl: 'views/immortals2016.html',
			controller: 'TeamController'
		})
		.when('/ImmortalsSponsors', {
			templateUrl: 'views/immortalsSponsors.html',
			controller: 'SponsorController'
		})


		.when('/invincibles', {
			templateUrl: 'views/teams.html',
			controller: 'TeamController'
		})
		.when('/invincibles2017', {
			templateUrl: 'views/invincibles2017.html',
			controller: 'TeamController'
		})
		.when('/invincibles2016', {
			templateUrl: 'views/invincibles2016.html',
			controller: 'TeamController'
		})
		.when('/InvinciblesSponsors', {
			templateUrl: 'views/invinciblesSponsors.html',
			controller: 'SponsorController'
		});

	$locationProvider.html5Mode(true);

}]);
