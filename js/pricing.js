//Gallery Code
angular.module('woodApp')
.factory('PricingFactory', function () {
    var factory = {};
    return factory;
})

.controller('PricingController', function ($scope, PricingFactory) {
    $scope.title = 'Genearal Costs';
});