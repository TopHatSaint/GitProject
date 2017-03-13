// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('singleProductDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './views/product-tmpl.html',
    controller: 'shopCtrl',
    link: function(scope, element, att) {

    },
    scope: {
      product: "="
    }
  }

});
