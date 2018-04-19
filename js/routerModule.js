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
		.otherwise({redirectTo:'/'});
})
    //simple example code
.factory('SimpleFactory', function () {
    var factory = {};
    var customers = [
		{ name: 'Maggie', city: 'Bismarck' },
		{ name: 'Jacob', city: 'Mandan' },
		{ name: 'Bo', city: 'Lincoln' }
    ];

    factory.getCustomers = function(){
        return customers;
    };

    return factory;
})
.controller('SimpleController', function ($scope, SimpleFactory) {
    $scope.customers = SimpleFactory.getCustomers();
	$scope.addCustomer = function() {
		$scope.customers.push(
			{name: $scope.newCustomer.name, city: $scope.newCustomer.city}
		);
	};
})
;