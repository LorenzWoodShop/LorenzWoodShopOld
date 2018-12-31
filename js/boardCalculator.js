//Contact Code
angular.module('woodApp')
.factory('BoardCalculatorFactory', function () {
    var factory = {};
    var standards = [
        { label: 'in.' },
        { label: 'cm.' }
    ];

    factory.getStandards = function() {
        return standards;
    };

    return factory;
})

.controller('BoardCalculatorController', function ($scope, BoardCalculatorFactory) {
    $scope.standards = BoardCalculatorFactory.getStandards();
    $scope.cart = [];
    $scope.cartTotal = 0;
    var globalIndex = 0;

    $scope.clearCart = function () {
        $scope.cart = [];
        $scope.updateTotal();
    }

    $scope.removeFromCart = function (targetIndex) {
        var removeIndex = -1;
        var i = 0;
        for(board of $scope.cart) {
            if (targetIndex === board.index) {
                removeIndex = i;
            }
            i++;
        }
        if (removeIndex !== -1) {
            $scope.cart.splice(removeIndex, 1);
            $scope.updateTotal();
        }
    }

    $scope.updateTotal = function () {
        var newTotal = 0;
        for(board of $scope.cart) {
            console.log("board:",board.total);
            newTotal += parseFloat(board.total);
        }
        console.log("total:", newTotal);
        $scope.cartTotal = newTotal;
    }

    $scope.addToCart = function () {
        var thickness = $scope.numThickness;
        var width = $scope.numWidth;
        var length = $scope.numLength;
        var species = $scope.txtSpecies;
        var price = $scope.numPrice
        var inToCm = 2.54;
        if ($scope.selectedThicknessStandard.label === 'cm.') {
            thickness /= inToCm;
        }
        if ($scope.selectedWidthStandard.label === 'cm.') {
            width /= inToCm;
        }
        if ($scope.selectedLengthStandard.label === 'cm.') {
            length /= inToCm;
        }
        var total = (((thickness * width * length) / 144) * price).toFixed(2);

        $scope.cart.push(
            {
                species: species,
                thickness: $scope.numThickness + ' ' + $scope.selectedThicknessStandard.label,
                width: $scope.numWidth + ' ' + $scope.selectedWidthStandard.label,
                length: $scope.numLength + ' ' + $scope.selectedLengthStandard.label,
                price: price,
                total: total,
                index: globalIndex
            }
        );
        globalIndex++;
        $scope.updateTotal();
    }
});