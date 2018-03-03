login.controller('loginPageController', ['$scope', 'loginService', function($scope, $rootScope, $stateParams, $state, loginService) {
                $scope.formSubmit = function() {
                  console.log($scope.username);
                  console.log($scope.password);
                  if(loginService.login($scope.username, $scope.password)){
                    $scope.error='';
                    $scope.username='';
                    $scope.password='';
                    $state.transitionTo('mainPage');
                  }
                  else {
                    $scope.error="Incorrect username/password";
                  }
                };


}]);
