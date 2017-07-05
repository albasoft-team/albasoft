'use strict';

var albasoftApp = angular.module('albasoftApp', ['ui.router','ngTouch','angular-loading-bar','angularSpinner']);

albasoftApp.config(['$stateProvider','$urlRouterProvider','cfpLoadingBarProvider','$locationProvider','usSpinnerConfigProvider',
    function ($stateProvider, $urlRouterProvider,$locationProvider, cfpLoadingBarProvider, usSpinnerConfigProvider) {
        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = true;
        usSpinnerConfigProvider.setDefaults({color: 'blue'});
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url : '/',
            views : {
                header : {
                    templateUrl : 'templates/header.html'
                },
                '@' : {
                    templateUrl : 'templates/content.html',
                    controller : 'homeController'
                },
                footer : {
                    templateUrl : 'templates/footer.html'
                }
            }
        })
        .state('nos-services', {
            url : '/nos-services',
            views : {
                header : {
                    templateUrl : 'templates/header.html'
                },
                '' : {
                    templateUrl : 'templates/nos-services.html',
                    controller : 'serviceController'
                },
                footer : {
                    templateUrl : 'templates/footer.html'
                }
            }
        })
        .state('a-propos', {
            url : '/a-propos',
            views : {
                header : {
                    templateUrl : 'templates/header.html'
                },
                '' : {
                    templateUrl : 'templates/a-propos.html',
                    controller : 'apropoController'
                },
                footer : {
                    templateUrl : 'templates/footer.html'
                }
            }
        })
        .state('contact', {
            url : '/contact',
            views : {
                header : {
                    templateUrl : 'templates/header.html'
                },
                '' : {
                    templateUrl : 'templates/contact.html',
                    controller : 'contactController'
                },
                footer : {
                    templateUrl : 'templates/footer.html'
                }
            }
        })
        .state('acceuil', {
            url : '/',
            views : {
                header : {
                    templateUrl : 'templates/header.html'
                },
                '' : {
                    templateUrl : 'templates/content.html',
                    controller : 'homeController'
                },
                footer : {
                    templateUrl : 'templates/footer.html'
                }
            }
        });

 }])
.run(['$rootScope', '$state', '$stateParams', function ($rootScope) {
}]);