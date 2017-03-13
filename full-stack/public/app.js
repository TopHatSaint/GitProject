// CONFIG
// ============================================================
angular.module("app",["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    // ITEMS STATE
    .state('item', {
      url: '/items',
      templateUrl: './views/item.html',
      controller: 'itemCtrl'
    });


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
