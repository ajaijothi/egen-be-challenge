(function() {
    'use strict';

    function appRouting($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/user/list');
    }
    
    appRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('app')
        .config(appRouting);
})();
