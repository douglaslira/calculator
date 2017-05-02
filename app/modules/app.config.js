(function(){

    'use strict';

    angular.module('App').config(configApp);

    configApp.$inject = ['$routeProvider'];

    function configApp($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/calculator'});
    }

})();