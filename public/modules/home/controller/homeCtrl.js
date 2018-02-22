/* global angular */
(function () {
    'use strict'
    angular.module('public.home')
        .controller('homeController', homeController)
    homeController.$inject = ['homeService', '$state', '$uibModal', '$scope', '$rootScope']

    function homeController(homeService, $state, $uiModal, $scope, $rootScope) {

        var vm = this
        vm.showEmail = false
        vm.openModal = _openModal
        vm.openRegModal = _openRegModal

        function _openModal() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'public/home/views/resume.html',
                controller: 'PublicModalController as ModalCtrl',
                windowTopClass: 'signUpContent',
                backdrop: 'static',
                resolve: {
                    loginError: PublicAuthService.getLoginError
                }

            })
            // opeModal() was called on click of 'login' button on public page and then modal becomes a ctrl of its own (LoginPubController)
            modalInstance.result.then(function (email) {
                // vm.modalSelected = res //  if the user closed the modal by clicking Save
                PublicAuthService.getUserInfo().then((res) => {
                    vm.logininfo = $rootScope.user.username
                    vm.showLogin = false
                    vm.loggedIn = true
                })
            }, function (signup) {
                if (signup) {
                    _openRegModal()
                }
            })
        }

        function _openRegModal() {
            var registrationModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'public/home/views/resume.html',
                controller: 'PublicModalController as ModalCtrl',
                windowTopClass: 'signUpContent',
                backdrop: 'static',
                resolve: {
                    loginError: () => []
                }
            })
            registrationModalInstance.result.then(function (user) { // get form data here inside the function parameter
                registrationModalInstance.close()
                vm.showLogin = false
            })
        }
    }
})()