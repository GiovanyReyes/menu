(function () {
    'use strict'
    angular.module('public.home')
        .directive('openResume', openResume)
        .directive('closeResume', closeResume)
        .directive('loginButton', loginButtonDirective)
        .directive('checkoutLogin', checkoutButtonDirective)

    function loginButtonDirective() {
        return {
            restrict: 'EC',
            template: '<li ng-click="homeCtrl.openModal()">Resume <i class="fa fa-user"></i> </li>',
            replace: true
        }
    }

    function checkoutButtonDirective() {
        return {
            restrict: 'E',
            template: '<li ng-click="homeCtrl.checkoutClick()">Checkout <i class="fa fa-check"></i></a>\n' +
                '</li>',
            replace: true
        }
    }

    function openResume() {
        return {
            restrict: 'AC',
            replace: true,
            templayeUrl: '',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    console.log('hi')
                    $('.search-overly-mask').toggleClass('open')
                })
            }
        }
    }

    function closeResume() {
        return {
            restrict: 'AC',
            template: '<a class=" search-close search-overly-close-trigger "> <i class=" fa fa-times-circle"> </i> </a>',
            replace: true,
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $('.search-overly-mask').removeClass('open')
                })
            }
        }
    }

})()