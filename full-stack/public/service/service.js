// INITILIZE SERVICE
// ============================================================
angular.module("app").service("service", function($http) {
  // CRUD FUNCTIONS
  // ============================================================
  this.getItems = function(){
    return $http({
      method: "GET",
      url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response) {
      console.log('service:', response);
      return response.data
    });
  }
  this.loginLocal = function(credentials) {
    return $http({
      method: "POST",
      url: '/auth/local',
      data: credentials
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR LOGGING IN!', err);
    })
  }

  this.getUser = function() {
    return $http({
      method: 'GET',
      url: '/auth/me'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.logout = function() {
    return $http({
      method: 'GET',
      url: '/auth/logout'
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }
});
