// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("mainCtrl", function($scope , service, $state) {
  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  function getUser() {
    service.getUser().then(function(user) {
      if (user) $scope.user = user.username;
      else $scope.user = 'Not Logged In!';
    })
  }
  getUser();

  $scope.loginLocal = function(username, password) {
    console.log('Logging in with', username, password);
    service.loginLocal({
      username: username,
      password: password
    })
    .then(function(res) {
      getUser();
    })
  }

  $scope.logout = service.logout;

});
