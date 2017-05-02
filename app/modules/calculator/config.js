(function() {

    'use strict';

    angular.module('app.calculator', ['ngRoute']).config(configModule);

    configModule.$inject = ['$routeProvider'];

    function configModule($routeProvider){
        $routeProvider.when('/calculator', {
            templateUrl: 'modules/calculator/views/calculator.controller.html',
            controller: 'CalculatorController',
            controllerAs: "vm"
        });
    }

})();