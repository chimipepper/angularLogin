login.controller('loginPageController', ['$scope', 'loginService', function($scope,$rootScope, AUTH_EVENTS, loginService) {

  $scope.credentials = {
      username: '',
      password: ''
    };
    // It’s a good practice to define all of the available event codes in a central place.
  .constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});
.constant('USER_ROLES', {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
})

    $scope.login = function (credentials) {
      loginService.login(credentials)
        .then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };

}]);
