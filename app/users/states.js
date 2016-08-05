(function() {
    'use strict';


    function usersRouting($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                template: '<ui-view/>'
            })
            .state('user.list', {
                url: '/list',
                templateUrl: 'app/users/views/user-list.html',
                controller: 'UserListCtrl',
                controllerAs:'$ctrl',
                resolve: {
                    Users: function(User){
                        return User.query();
                    }
                }
            })
            .state('user.add', {
                url: '/add',
                templateUrl: 'app/users/views/user-add.html',
                controller: 'AddUserCtrl',
                controllerAs:'$ctrl'
            })
            .state('user.detail', {
                url: '/detail/:id',
                templateUrl: 'app/users/views/user-detail.html',
                controller: 'UserDetailCtrl',
                controllerAs:'$ctrl',
                resolve: {
                    UserInfo: function(User, $stateParams){
                        return User.get({id: $stateParams.id});
                    }
                }
            })
            .state('user.delete', {
                url: '/delete/:id',
                onEnter: function(User, $stateParams, $state){
                    if(confirm('Are you sure want to delete?')){
                        User.delete({id:$stateParams.id})
                        $state.go('user.list');
                    }
                }
            });

    }

    usersRouting.$inject = ['$stateProvider', '$urlRouterProvider'];

    angular.module('app')
        .config(usersRouting);
})();
