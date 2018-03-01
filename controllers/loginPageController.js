login.controller('loginPageController', ['$scope','loginService', function($scope,loginService, $state) {

  $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.userInfo= loginService.userInfo;
    // It’s a good practice to define all of the available event codes in a central place.
//   .constant('AUTH_EVENTS', {
//   loginSuccess: 'auth-login-success',
//   loginFailed: 'auth-login-failed',
//   logoutSuccess: 'auth-logout-success',
//   sessionTimeout: 'auth-session-timeout',
//   notAuthenticated: 'auth-not-authenticated',
//   notAuthorized: 'auth-not-authorized'
// });
// .constant('USER_ROLES', {
//   all: '*',
//   admin: 'admin',
//   editor: 'editor',
//   guest: 'guest'
// })
$scope.authenticateUser = function(credentials){
  console.log($scope.credentials);
  if ($scope.credentials.username === loginService.userInfo.username && $scope.credentials.password === loginService.userInfo.password){
    console.log($scope.credentials);
      /*set umaru as admin and give access in ui router */
      $state.go('mainPage',{id:});
  }
  else{
      alert("Sorry, you are not able to pass");
  }
};


}]);
