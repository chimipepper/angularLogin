var login = angular.module('login', ['ui.router']);

login.config(function($stateProvider, $urlRouterProvider,USER_ROLES) {
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
            controller: 'mainPageController',
            data:{
              authorizedRoles:[USER_ROLES.admin, USER_ROLES.editor]
            }
        });
});
