angular.module('pageTabApp', ['ui.router', 'ngAnimate'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('Page1', {
        views: {
            main: {
                url: 'Page1',
                templateUrl: '/PageTab/Page1'
            }
        },
    })
    .state('Page2', {
        views: {
            main: {
                url: 'Page1',
                templateUrl: 'PageTab/Page1'
            },
            sub:{
                url: 'Page2',
                templateUrl: '/PageTab/Page2'
            }
        }
    })
    .state('Page3', {
        views: {
            main:{
                url: 'Page3',
                templateUrl: '/PageTab/Page3'
            }
        },
    })
}])