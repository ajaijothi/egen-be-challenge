(function(){
    'use strict';
    
    function User($resource){
        return $resource('http://mocker.egen.io/users/:id');
    }
    
    User.$inject = ['$resource'];
    
    angular.module('app.service')
    .factory('User', User);
})();