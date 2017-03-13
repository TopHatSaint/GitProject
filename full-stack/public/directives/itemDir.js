// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('itemDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './views/itemTmpl.html',
    scope: {
      item: '='
    }
  };
});
