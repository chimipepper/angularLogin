login.service('loginService', function($http, Session) {

  var loginService = {};

    loginService.login = function (credentials) {
      return $http
        .post('/login', credentials)
        .then(function (res) {
          Session.create(res.data.id, res.data.user.id,
                         res.data.user.role);
          return res.data.user;
        });
    };

    loginService.isAuthenticated = function () {
      return !!Session.userId;
    };

    loginService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (loginService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return loginService;
});
