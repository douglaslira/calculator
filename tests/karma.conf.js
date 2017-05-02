module.exports = function(config){
    config.set({
        basePath : '../',
        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/modules/app.js',
            'app/components/module.js',
            'app/components/**/*/*.js',
            'app/modules/*/module.js',
            'app/modules/*/{config}.js',
            'app/modules/*/*/*.js',
            'tests/unit-test/**/*/*.js'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'app/modules/*/*/*.js': ['coverage'],
            'app/components/**/*/*.js': ['coverage']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        autoWatch : true,
        frameworks: ['jasmine'],
        browsers : ['PhantomJS'],
        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        singleRun: false,
        colors: true,
        logLevel: config.LOG_INFO
    });
};