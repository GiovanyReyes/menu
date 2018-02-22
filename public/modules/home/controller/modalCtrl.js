(function () {
    'use strict'
    // AS MODALCTRL
    angular.module('public.home')
        .controller('PublicModalController', PublicModalController)

    PublicModalController.$inject = ['$state', '$uibModalInstance', 'tokenService', '$rootScope', 'loginError']

    function PublicModalController( $state, $uibModalInstance, tokenService, $rootScope, loginError) {
        var vm = this
        vm.user = {}
        vm.showError = false
        vm.modalClose = _modalClose
        vm.openRegModal = _openRegModal
        vm.dismiss = _dismiss

        // registration modal functions

        function _openRegModal() {
            $uibModalInstance.dismiss(true)
        }

        // utility

        function _modalClose() {
            $uibModalInstance.close()
        }

        function _dismiss() {
            $uibModalInstance.dismiss()
        }

        function onError(err) {
            console.log('error', err)
        }
    }

})()