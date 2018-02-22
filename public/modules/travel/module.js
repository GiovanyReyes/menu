/*global angular */
(function () {
    'use strict'
    angular.module('public.travel', ['ui.router'])
        .config(RouteConfig)
    RouteConfig.$inject = ['$stateProvider']

function RouteConfig($stateProvider){
    $stateProvider
    .state('app.travel',{
        url:'/travel',
        data:{
           title: 'Travel' 
        },
        views:{
            "content@app":{
                controller: 'travelController as travelCtrl',
                templateUrl: 'public/modules/travel/views/map.html'
            }
        }

    })
}

})()

