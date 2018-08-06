//Contact Code
angular.module('woodApp')
.factory('ContactFactory', function () {
    var factory = {};
    return factory;
})

.controller('ContactController', function ($scope, ContactFactory) {
    $scope.title = 'Contact Info';
});