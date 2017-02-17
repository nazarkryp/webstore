(function () {
    angular.module('webstore')
        .service('SearchService', SearchService);

    SearchService.$inject = ['$q', 'HttpService'];

    function SearchService($q, HttpService) {
        
    }
})();