(function () {
    'use strict';

    angular.module('storeapp').service('ProductsService', ProductsService);

    ProductsService.$inject = ['$q', 'Config', 'HttpService'];

    function ProductsService($q, Config, HttpService) {
        this.getProducts = function () {
            var deferred = $q.defer();

            HttpService.get(Config.baseAddress + 'api/products', deferred);

            return deferred.promise;
        };
    };
})();