/* global angular */
(function () {
    'use strict'
    angular.module('public.layout')
        .controller('navigationController', navigationController)
    navigationController.$inject = ['$scope', '$location', '$anchorScroll', '$state']

    function navigationController($scope, $location, $anchorScroll, $state) {
        var vm = this
        vm.goToAnchor = goToAnchor

        function goToAnchor() {
            $location.hash('bottom')
            $anchorScroll()
            $state.go('app.contact')

        }
    }
})()