/*global angular*/

(function () {
    angular.module('public.home')
        .factory('homeService', homeServiceFactory)

    homeServiceFactory.$inject = ['$http']

    function homeServiceFactory($http) {
        return {
            getAll
        }

        function getAll() {
            return $http.get('/api/home')
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(res){
            return res.data
        }
    }
})()