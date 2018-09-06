angular.module('woodApp')
.factory('NavFactory', function () {
    var factory = {};
    var navOpen = false;
    var navList = [
        { location: '', label: 'Home' },
        { location: 'gallery', label: 'Gallery' },
        { location: 'pricing', label: 'Pricing' },
        { location: 'contact', label: 'Contact' }
    ];
    var navClass = 'lws-hide';
    var navImage = './img/menuIcon.png';

    factory.getNavOpen = function () {
        return navOpen;
    };

    factory.toggleNavOpen = function () {
        navOpen = !navOpen;
    };

    factory.toggleNavClass = function () {
        if (navClass = 'lws-hide') {
            navClass = 'lws-show';
        } else {
            navClass = 'lws-hide';
        }
    };

    factory.toggleNavClass = function () {
        if (navClass = './img/menuIcon.png') {
            navClass = './img/menuCollapseIcon.png';
        } else {
            navClass = './img/menuIcon.png';
        }
    };

    return factory;
})

.controller('NavController', function ($scope, NavFactory) {
    $scope.navClick = function () {
        NavFactory.toggleNavClass;
        NavFactory.toggleNavOpen;
    };
});