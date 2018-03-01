var login = angular.module('login', ['ui.router']);

login.config(function($stateProvider, $urlRouterProvider) {
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
});
