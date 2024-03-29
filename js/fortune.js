angular.module('woodApp')
.factory('FortuneFactory', function () {
    var factory = {};
    //=======================================Variables=======================================
    //{ quote: "TEXT", author: "AUTHOR" }
    var fortunes = [
        { quote: "I make things out of tree parts.", author: "Grayson Lorenz" },
        { quote: "Take time to relax especially when you don't have time for it.", author: "Fortune Cookie" },
        { quote: "It is better to be a warrior in a garden than a gardener in a war.", author: "Chinese Proverb" },
        { quote: "You can be 100% right and 100% fired.", author: "Eli the Computer Guy" },
        { quote: "'Tis a poor craftsman what blames his tools.", author: "Lots of people" },
        { quote: "The greatest victory is that which requires no battle.", author: "Sun Tzu, The Art of War" },
        { quote: "Happiness lies in the joy of achievement and the thrill of creative effort.", author: "Fortune Cookie" }
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