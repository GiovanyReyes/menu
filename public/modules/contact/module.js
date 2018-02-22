/* global angular */
(function(){
    'use strict'
    angular.module('public.contact', ['ui.router'])
    .config(RouteConfig)
    RouteConfig.$inject=['$stateProvider']
    function RouteConfig($stateProvider){
        $stateProvider
        .state('app.contact',{
            url: '/contact',
            data:{
                title: 'Contact'
            },
            views:{
                'content@app': {
                    controller:'contactController as contactCtrl',
                    templateUrl: '/public/modules/contact/views/contact.html'
                }
            }
        })

    }
})()