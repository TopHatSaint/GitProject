angular.module('myApp')
    .service('mainService', function($http) {
        var BASE_URL = 'http://pokeapi.co/api/v2/';

        this.getPokemon = function() {
                return $http({
                    method: 'GET',
                    url: BASE_URL + 'pokemon/'

                })
        }
    })
