(
    function () {
        'use strict';

        angular.module('webstore')
            .component('search', {
                controller: 'SearchController',
                controllerAs: 'vm',
                templateUrl: 'app/components/search/search.html'
            });
    }
)();