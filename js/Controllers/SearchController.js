'use strict';

App.controller('SearchController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
        $scope.googleBookApiUrl = 'https://www.googleapis.com/books/v1/volumes'
        
        /**
         * Get books data based on their names
         * 
         * @param {String} value
         * @returns {Object}
         */
        $scope.getBooks = function (value) {
            return $http.get($scope.googleBookApiUrl, {
                params: {
                    q: value
                }
            }).then(function (response) {
                return response.data.items.map(function (item) {
                    return item;
                });
            });
        };
        
        /**
         * A callback executed when a book is selected.
         * The book data saved in a localStorage and then navigate to the
         * book details page.
         * 
         * @param {Object} $item
         */
        $scope.onSelect = function ($item) {
            $scope.book = $item;
            localStorage.setItem('book', angular.toJson($item));
            
            $state.go('book', { book: $item })
        };
    }]);