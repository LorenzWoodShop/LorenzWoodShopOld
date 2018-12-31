var woodApp = angular.module('woodApp', ['ngRoute']);

woodApp.config(function ($routeProvider){
    $routeProvider
		.when('/',
			{
			    controller: '',
			    templateUrl: 'partials/home.html'
			})
		.when('/gallery',
			{
			    controller: 'GalleryController',
			    templateUrl: 'partials/gallery.html'
			})
		.when('/contact',
			{
			    controller: 'ContactController',
			    templateUrl: 'partials/contact.html'
			})
		.when('/pricing',
			{
			    controller: 'PricingController',
			    templateUrl: 'partials/pricing.html'
			})
		.when('/boardCalculator',
			{
			    controller: 'BoardCalculatorController',
			    templateUrl: 'partials/boardCalculator.html'
			})
		.otherwise({redirectTo:'/'});
});