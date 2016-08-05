(function() {
    'use strict';

    function appRouting($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<ui-view/>'
            });
        
        $urlRouterProvider.otherwise('/');
    }
    
    appRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('app')
        .config(appRouting);
})();
