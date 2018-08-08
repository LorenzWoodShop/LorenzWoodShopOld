//Gallery Code
angular.module('woodApp')
.factory('FortuneFactory', function () {
    var factory = {};
    //=======================================Variables=======================================
    var fortunes = [
        { quote: "I make things out of tree parts.", author: "Grayson Lorenz" }
    ];

    //=======================================Functions=======================================
    factory.getFortune = function (index) {
        return fortunes[index];
    };

    factory.getRandomFortune = function () {
        var index = Math.floor(Math.random() * fortunes.length);
        return fortunes[index];
    };

    return factory;
})

.controller('FortuneController', function ($scope, FortuneFactory) {
    var randomFortune = FortuneFactory.getRandomFortune();
    $scope.randomFortuneText = randomFortune.quote;
    $scope.randomFortuneAuthor = randomFortune.author;
});