(function(){
    'use strict';
    
    angular.module('app.service')
    .factory('User', function($resource){
        return $resource('http://mocker.egen.io/users/:id');
    })
})();