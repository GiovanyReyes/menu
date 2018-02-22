/* global angular */
(function (){
    'use strict'
    angular.module('public.contact')
    .factory('contactService', contactService)
    contactService.$inject=['$http']
    function contactService($http){
        return{
            postEmail
        }

        function postEmail(data, onSuccess, onError){
           return $http.post('/api/contact', data)
            .then(function(response){
                onSuccess(response.data)
            }).catch(function(response){
                onError(response.data)
            })
        }
    }
})()    