(function () {
    'use strict';

    angular.module('storeapp').service('HttpService', HttpService)

    HttpService.$inject = ['$http'];

    function HttpService($http) {
        this.get = function (url, deferred) {
            $http.get(url)
                .then(function onSuccess(response) {
                    deferred.resolve(response.data);
                }
                ).catch(function onError(error) {
                    deferred.reject(error.data);
                });
        };
    };
})();