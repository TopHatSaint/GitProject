// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('navBar', function() {
  return {
    restrict: 'EA',
    templateUrl: './view/navBar.html',
    controller: 'GUIctrl'
  };
});
