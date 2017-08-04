'use strict';

App.controller('BookController', ['$scope', '$rootScope', '$stateParams', function ($scope, $rootScope, $stateParams) {        
        /**
         * If the page reloaded, It will restore the last visited book details.
         */
        if (Object.keys($stateParams.book).length == 0) {
            $scope.book = angular.fromJson(localStorage.getItem('book'));
        } else {
            $scope.book = $stateParams.book;
            localStorage.setItem('book', angular.toJson($scope.book));
        }
        
        /**
         * Change page title to the selected book title.
         */
        if ($scope.book !== null) {
            $rootScope.$state.current.data.pageTitle = $scope.book.volumeInfo.title;
        }
    }]);