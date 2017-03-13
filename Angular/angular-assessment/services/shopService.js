// INITILIZE SERVICE
// ============================================================
angular.module("app").service("shopService", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getProducts = function() {
    return $http({
      method: 'GET',
      url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response) {
      return response.data
    });
  };
this.getProduct = function(id) {
  return $http({
    method: 'GET',
    url: 'http://practiceapi.devmounta.in/products/' + id
  }).then(function(response) {
    console.table(response)
    return response.data
  });
}
  // OTHER FUNCTIONS
  // ============================================================

});
