(function () {
    'use strict'
    angular.module('public.travel')
        .controller('travelController', travelController)
    travelController.$inject = ['travelService']
    function travelController(travelService){
        var vm = this 
        vm.getTravel = _getTravel
        vm.deleteTravel = _deleteTravel
        vm.travels = []

        _getTravel()
        function _getTravel(){
            console.log('getting travel')
            travelService.getAll(onTravelSuccess, onError)
        }
        function onTravelSuccess(data){
            console.log(data.items)
            vm.travels = data.items
        }

        function _deleteTravel(idx, id){
            console.log(idx)
            console.log(id + 'id in the delete')
            vm.travelToDelete = idx
            travelService.deleteTravel(id, onDeleteSuccess, onError)
        }

        function _updateTravel(idx, id){
            vm.travelToUpdate = idx
            travelService.updateTravel(id, data, onUpdateSuccess, onError)
        }

        function onUpdateSuccess(data){
            console.log(data)
           vm.travels.splice(vm.travelToUpdate, 1, data)   //data being what we want added to our list 
        }

        function onDeleteSuccess(data){
            console.log('we deleted this bitch')
            vm.travels.splice(vm.travelToDelete, 1)
        }

        function onError(err){
            console.log(err)
        }
    // DELETE SUCCESS //
    }

})()