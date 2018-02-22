(function(){
    'use strict'
    angular.module('public.travel')
    .directive('updateForm', updateForm)
    .directive('searchCloseBtn', searchCloseBtn)

    function updateForm(){
        return {
            restrict: 'ACE',
            template: '<h1> suck me </h1>',
            replace: true
            // templateUrl: 'public/travel/views/updateForm.html'
        }
    }

    function searchCloseBtn() {
    return {
        restrict: 'AE',
        template: '<a class=" search-close search-overly-close-trigger "> <i class=" fa fa-times-circle"> </i> </a>',
        replace: true
    }
}

})()

