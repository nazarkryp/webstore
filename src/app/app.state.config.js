angular.module('webstore')
    .config(['$stateProvider', '$urlRouterProvider', '$mdIconProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $mdIconProvider, $httpProvider) {
            $stateProvider
                .state('products', {
                    url: '/',
                    templateUrl: 'app/components/products/products.html',
                    controller: 'ProductsController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('/');
        }]);