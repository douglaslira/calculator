(function(){

    'use strict';

    String.prototype.isNumeric = function() {
        return !isNaN(parseFloat(this)) && isFinite(this);
    };

    Array.prototype.clean = function() {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === "") {
                this.splice(i, 1);
            }
        }
        return this;
    };

    angular.module('App', [
        'app.core',
        'app.calculator',
        'app.components'
    ]);

})();
