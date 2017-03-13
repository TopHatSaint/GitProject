// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("itemCtrl", function($scope, service) {
  // VARIABLES
  // ============================================================

    $scope.getItems = function(){
      service.getItems().then(function(response) {
        console.log(service, response);
        $scope.foundItems = response;
      });
    }
    $scope.getItems();
  // FUNCTIONS
  // ============================================================
});
