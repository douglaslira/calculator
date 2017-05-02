(function () {

    'use strict';

    angular.module('app.components').factory('calculator', calculator);

    calculator.$inject = [];

    function calculator() {
        return {
            checkExpression: function(expValue){

                /**
                 * https://en.wikipedia.org/wiki/Shunting-yard_algorithm
                 */

                var outputQueue = "";
                var operatorStack = [];
                var operators = {
                    "^": {
                        precedence: 4,
                        associativity: "R"
                    },
                    "/": {
                        precedence: 3,
                        associativity: "L"
                    },
                    "*": {
                        precedence: 3,
                        associativity: "L"
                    },
                    "+": {
                        precedence: 2,
                        associativity: "L"
                    },
                    "-": {
                        precedence: 2,
                        associativity: "L"
                    }
                };
                expValue = expValue.replace(/\s+/g, "").split(/([\+\-\*\/\^\(\)])/).clean();
                for(var i = 0; i < expValue.length; i++) {

                    var token = expValue[i];
                    if (token.isNumeric()) {
                        outputQueue += token + " ";
                    } else if("^*/+-".indexOf(token) !== -1) {
                        var o1 = token, o2 = operatorStack[operatorStack.length - 1];
                        while("^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "L" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "R" && operators[o1].precedence < operators[o2].precedence))) {
                            outputQueue += operatorStack.pop() + " ";
                            o2 = operatorStack[operatorStack.length - 1];
                        }
                        operatorStack.push(o1);
                    } else if(token === "(") {
                        operatorStack.push(token);
                    } else if(token === ")") {
                        while(operatorStack[operatorStack.length - 1] !== "(") {
                            outputQueue += operatorStack.pop() + " ";
                        }
                        operatorStack.pop();
                    }
                }
                while(operatorStack.length > 0) {
                    outputQueue += operatorStack.pop() + " ";
                }
                return outputQueue;
            },
            resolveExpression: function(expValue){
                var resultStack = [];
                expValue = expValue.split(" ");
                for(var i = 0; i < expValue.length; i++) {
                    if(expValue[i].isNumeric()) {
                        resultStack.push(expValue[i]);
                    } else {
                        var a = resultStack.pop(), b = resultStack.pop();
                        if(expValue[i] === "+") {
                            resultStack.push(parseInt(a) + parseInt(b));
                        } else if(expValue[i] === "-") {
                            resultStack.push(parseInt(b) - parseInt(a));
                        } else if(expValue[i] === "*") {
                            resultStack.push(parseInt(a) * parseInt(b));
                        } else if(expValue[i] === "/") {
                            resultStack.push(parseInt(b) / parseInt(a));
                        } else if(expValue[i] === "^") {
                            resultStack.push(Math.pow(parseInt(b), parseInt(a)));
                        }
                    }
                }
                if(resultStack.length > 1) {
                    return "error";
                } else {
                    return resultStack.pop().toString();
                }
            },
            getInterest: function(v,m,i){
                return v * Math.pow((1 + (i / 100)), m);
            }
        };
    }

})();
