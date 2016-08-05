(function() {
    'use strict';
    
    angular.module('app.module',[]);
    angular.module('app.service',[]);
    angular.module('app.component',[]);
    
    angular.module('app', [
        'ui.bootstrap', 
        'ui.router',
        'ngResource',
        'ngAnimate',
        'app.module',
        'app.service',
        'app.component'
    ]);
})();
