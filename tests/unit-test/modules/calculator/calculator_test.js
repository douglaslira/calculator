describe('CalculatorController::Test', function() {

    beforeEach(function(){
        module('app.calculator');
    });

    var scope = {}, vm;

    beforeEach(inject(function ($controller) {
        vm = $controller('CalculatorController', {$scope: scope, calculator: ''});
    }));

    it('should CalculatorController is dedined', function () {
        expect('CalculatorController').toBeDefined();
    });

    it('should check value of expressionResult default', function () {
        expect(vm.expressionResult).toEqual('R$ 0,00');
    });

    it('should check value of expression', function () {
        vm.insertChar('1');
        expect(vm.expression).toEqual('1');
    });

});