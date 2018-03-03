var login = angular.module('login', ['ui.router']);

login.run(function($rootScope, $location, $state, loginService){
  $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
          console.log('Changed state to '+ toState);
        });
        if(!loginService.isAuthenticated()){
          $state.transitionTo('login');
        }
});

login.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('loginPage');
    $stateProvider
        .state('loginPage', {
            url: '/loginPage',
            templateUrl: 'views/loginPage.html',
            controller: 'loginPageController'
        })
        .state('mainPage', {
            url: '/mainPage',
            templateUrl: 'views/mainPage.html',
            controller: 'mainPageController'
        });
}]);
