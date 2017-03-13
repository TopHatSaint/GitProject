// INITILIZE APP
// ============================================================
// CONFIG
// ============================================================
angular.module("app",["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './view/home.html',
      controller: 'GUIctrl'
    })// dice STATE
    .state('dice', {
      url: '/dice',
      templateUrl: './view/dice.html',
      controller: 'GUIctrl'
    })


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
