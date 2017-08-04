var App = angular.module('App', [
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngCart'
]);

/* Setup Routing For All Pages */
App.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
                // Book view page
                .state('book', {
                    url: '/book',
                    templateUrl: 'book.html',
                    data: {pageTitle: 'Book'},
                    controller: 'BookController',
                    params: {
                        book: {}
                    }
                })
                // Cart view page
                .state('cart', {
                    url: '/cart',
                    templateUrl: 'cart.html',
                    data: {pageTitle: 'Cart'},
                    controller: 'CartViewController'
                })
    }]);

/* Init global settings and run the app */
App.run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$state = $state;
    }]);

/* Setup App Main Controller */
App.controller('AppController', ['$scope', '$rootScope', 'ngCart', function ($scope, $rootScope, ngCart) {
        ngCart.setTaxRate(0);
        ngCart.setShipping(0);
    }]);