'use strict';

describe('app.components module', function () {

    beforeEach(module('app.components'));

    describe('version service', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });

    describe('app.components module', function () {

        beforeEach(module('app.components'));

        describe('app-version directive', function () {
            it('should print current version', function () {
                module(function ($provide) {
                    $provide.value('version', 'TEST_VER');
                });
                inject(function ($compile, $rootScope) {
                    var element = $compile('<span app-version></span>')($rootScope);
                    expect(element.text()).toEqual('TEST_VER');
                });
            });
        });
    });

    describe('app.components module', function () {

        beforeEach(module('app.components'));

        describe('interpolate filter', function() {
            beforeEach(module(function($provide) {
                $provide.value('version', 'TEST_VER');
            }));

            it('should replace VERSION', inject(function(interpolateFilter) {
                expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
            }));
        });
    });

});
