angular.module('myApp')
    .controller('mainController', function($scope, groceryService) {
        $scope.groceries = groceryService.getGroceries();

        $scope.cart = [];
        $scope.addItemToCart = function(grocery) {
            $scope.cart.push(grocery);

        }

        $scope.total = function() {
            var total = 0;

            for (var i = 0; i < $scope.cart.length; i++) {
                total += $scope.cart[i].price;
            }
            return total;

        }

    });
