/* global angular */

(function () {
    'use strict'
    var app = angular.module('public', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',

        //app 
        'public.layout',
        'public.home',
        'public.contact',
        'public.travel',
        'public.menu'

    ])

    app.config(RouteConfig)

    // whats this all doing 
    RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home')
        $locationProvider.html5Mode(true)
        // $stateProvider
        //     .state('app.menu', {
        //         url: '/menu',
        //         templateUrl: '/public/modules/partials/menu.html',
        //         controller: 'homeController as homeCtrl', 
        //         pageTitle: 'Menu',
        //     })
            // .state('app.home', {
            //     url: '/home',
            //     data: {
            //         title: 'home'
            //     },
            //     views: {
            //         'content@app': {
            //             controller: 'homeController as homeCtrl',
            //             templateUrl: '/public/modules/home/views/home.html'
            //         }
            //     }
            // })
    }

    app.run(function ($rootScope) {
        $rootScope.$on('$stateChangeError', console.log.bind(console))
    })
})()