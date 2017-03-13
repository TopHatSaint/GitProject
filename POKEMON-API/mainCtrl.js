angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService) {

        mainService.getPokemon().then(function(response) {
            $scope.pokemon = response.data.results;
        })
    })
