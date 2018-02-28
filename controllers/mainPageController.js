login.controller('mainPageController', ['$scope', function($scope, USER_ROLES, loginService) {
      $scope.currentUser = null;
      $scope.userRoles = USER_ROLES;
      $scope.isAuthorized = loginService.isAuthorized;

      $scope.setCurrentUser = function(user) {
        $scope.currentUser = user;
      };

    });
