(function(){

    'use strict';

    angular.module('app.calculator').controller('CalculatorController', CalculatorController);

    CalculatorController.$inject = ['calculator'];

    function CalculatorController(calculator){
        var vm = this;
        var resultExpression = 0;

        vm.expressionResult = "R$ 0,00";
        vm.calculateExpression = function(){
            var postfix = calculator.checkExpression(vm.expression);
            resultExpression = parseFloat(calculator.resolveExpression(postfix.trim())).toFixed(2);
            if(isNaN(resultExpression)){
                vm.expressionResult = "Error!";
            } else {
                vm.expressionResult = "R$ "+parseFloat(calculator.resolveExpression(postfix.trim())).toFixed(2);
            }
        };

        vm.insertChar = function (v) {
            if(vm.expression === "" || vm.expression === undefined) {
                vm.expression = v;
            } else {
                vm.expression = vm.expression + "" + v;
            }
        };

        vm.backspaceBtn = function(){
            vm.expression = vm.expression.substring(0, vm.expression.length - 1);
            if(vm.expression.length === 0){
                vm.expressionResult = "R$ 0,00";
            }
        };

        vm.calculateInterest = function(){
            var resultInterest = calculator.getInterest(resultExpression, vm.month.numberOfMonths, vm.month.interest);
            console.log(vm.month, resultInterest, "AAAAAAAAAAAA");
        };

        // EXTRA ///////////////////////////////////////////////////////////////////////////////////////////////////////

        vm.months = [
            {name: "24", numberOfMonths: 24, interest: 7},
            {name: "36", numberOfMonths: 36, interest: 9},
            {name: "48", numberOfMonths: 48, interest: 15}
        ];
    }

})();