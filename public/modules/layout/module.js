/* global angular */
(function () {
    'use strict'

    angular.module('public.layout', ['ui.router']) // maybe sabio.layout ? 
        .config(RouteConfig)
    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    root: {
                        templateUrl: '/public/modules/layout/layout.tpl.html'
                    },
                    'nav@app': {
                        templateUrl: '/public/modules/layout/views/navigation.html',
                        controller: 'navigationController as navCtrl'
                    },
                    'footer@app': {
                        templateUrl: '/public/modules/layout/views/footer.html',
                        controller: 'navigationController as navCtrl'
                    }
                }
            })
    }
})()