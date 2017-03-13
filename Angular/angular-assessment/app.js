// INITILIZE APP
// ============================================================
// CONFIG
// ============================================================
angular.module("app", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  // INITILIZE STATES
  // ============================================================
  $stateProvider
    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './views/home.html',
      controller: ''
    })// shop STATE
    .state('shop', {
      url: '/shop',
      templateUrl: './views/shop.html',
      controller: 'shopCtrl'
    })// blog STATE
    .state('blog', {
      url: '/blog',
      templateUrl: './views/blog.html',
      controller: 'blogCtrl'
    })// about STATE
    .state('about', {
      url: '/about',
      templateUrl: './views/about.html',
      controller: 'aboutCtrl'
    })// details STATE
    .state('details', {
      url: '/details/:id',
      templateUrl: './views/product-details.html',
      controller: 'shopCtrl'
    });





  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
