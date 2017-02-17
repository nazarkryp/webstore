(function () {
    angular.module('webstore')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService'];

    function SearchController(SearchService) {
        var self = this;

        self.response = {
            categories: {}
        };
    }
})();