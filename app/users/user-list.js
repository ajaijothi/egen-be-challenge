(function() {
    'use strict';

    function UserListCtrl(Users) {
        this.Users = Users || [];
    }

    UserListCtrl.$inject = ['Users'];

    angular.module('app')
        .controller('UserListCtrl', UserListCtrl);

})();
