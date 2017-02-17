(function () {
    'use strict';

    angular.module('storeapp').controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductsService'];

    function ProductsController(ProductsService) {
        var self = this;

        self.response = {
            data: 'Loading...'
        };


        function getProducts() {
            ProductsService.getProducts().then(
                function (response) {
                    self.response.data = response;
                },
                function (error) {
                    self.response.data = error;
                }
            );
        };

        this.$onInit = function () {
            getProducts();
        };
    };
})();