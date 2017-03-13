// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("shopCtrl", function($scope, $stateParams, $state, shopService) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================

  shopService.getProducts().then(function(response) {
    // console.table(response);
    $scope.productss = response;
  });

  shopService.getProduct($stateParams.id).then(function(response) {

     console.log(response);
     $scope.singleProduct = response;

  });
});
