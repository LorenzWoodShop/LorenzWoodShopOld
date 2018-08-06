//Gallery Code
angular.module('woodApp')
.factory('GalleryFactory', function () {
    var factory = {};
    return factory;
})

.controller('GalleryController', function ($scope, GalleryFactory) {
    $scope.title = 'Pictures of Things Made of Wood';
});