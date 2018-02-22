/*global angular*/

(function () {
    'use strict'
    angular.module('public.travel')
        .factory('travelService', travelServiceFactory)
    travelServiceFactory.$inject = ['$http']

    function travelServiceFactory($http) {
        return {
            getAll,
            insert,
            deleteTravel,
            updateTravel
        }

        function updateTravel(id, data, onSuccess, onError){
            return $http('/api/travel' + id, data)
            .then(function (response){
                onSuccess(response.data)
            }).catch(function (response){
                onError(response.data)
            })
        }
        
        function getAll(onSuccess, onError) {
            return $http.get('/api/travel/')
                .then(function (response) {
                    console.log(response.data)
                    console.log('kendrick')
                    onSuccess(response.data)
                }).catch(function (response) {
                    onError(response.data)
                })
        }

        function insert(data, onSuccess, onError) {
            return $http.post('/api/travel', data)
                .then(function (response) {
                    onSuccess(response.data)
                }).catch(function (response) {
                    onError(response.data)
                })
        }

        function deleteTravel(id, onSuccess, onError) {
            return $http.delete('/api/travel/' + id)
                .then(function(response) {
                    console.log('angular service suscess')
                    console.log(response.data)
                    onSuccess(response.data)
                }).catch(function (response) {
                    onError(response.data)
                })
        }
    }
})()