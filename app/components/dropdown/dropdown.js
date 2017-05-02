(function(){

    'use strict';

    angular.module('app.components').directive('dropdown', dropdownFunction);

    dropdownFunction.$inject = [];

    function dropdownFunction(){
        return {
            restrict: "E",
            templateUrl: "components/dropdown/views/dropdown.html",
            scope: {
                placeholder: "@",
                list: "=",
                selected: "=",
                property: "@"
            },
            link: function(scope, element) {
                scope.listVisible = false;
                scope.isPlaceholder = true;

                scope.select = function(item) {
                    scope.isPlaceholder = false;
                    scope.selected = item;
                    if (scope.onChange !== undefined) {
                        scope.onChange(item);
                    }
                };

                scope.isSelected = function(item) {
                    if(scope.selected) {
                        return item[scope.property] === scope.selected[scope.property];
                    }
                };

                scope.show = function() {
                    scope.listVisible = !scope.listVisible;
                };

                var documentClicked = function(e) {

                    var target = angular.element(e.target), parent = angular.element(target.parent()[0]);
                    if (!(target.hasClass("dropdown-display") && target.hasClass("clicked")) && !(parent.hasClass("dropdown-display") && parent.hasClass("clicked")) && (target.attr("type") !== 'text')) {
                        scope.$applyAsync(function() {
                            scope.listVisible = false;
                        });
                    }
                };

                element.bind('click', documentClicked);

                scope.$watch("selected", function(value) {
                    if(scope.selected) {
                        scope.isPlaceholder = scope.selected[scope.property] === undefined;
                        scope.display = scope.selected[scope.property];
                        scope.q = "";
                    }
                });
            }
        }
    }

})();