(function() {
    'use strict';

    function UserDetailCtrl(UserInfo) {
        this.User = UserInfo;
    }

    UserDetailCtrl.$inject = ['UserInfo'];

    angular.module('app')
        .controller('UserDetailCtrl', UserDetailCtrl);

})();
