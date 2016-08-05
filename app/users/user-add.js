(function() {
    'use strict';

    function AddUserCtrl(User, $state) {
        var self = this;
        this.User = new User();
        
        this.action = {
            save: function(){
                self.User.$save().then(function(){
                    $state.go('user.list');
                });
            }
        };
    }

    AddUserCtrl.$inject = ['User', '$state'];

    angular.module('app')
        .controller('AddUserCtrl', AddUserCtrl);

})();
