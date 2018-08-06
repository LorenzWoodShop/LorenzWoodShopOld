//Gallery Code
angular.module('woodApp')
.factory('HomeFactory', function () {
    var factory = {};
    return factory;
})

.controller('HomeController', function ($scope, HomeFactory) {
    $scope.title = 'Welcome to the Shop';
});