/* global module */
module.exports = function(config) {
  'use strict';
  config.set({
    autoWatch: true,
    singleRun: true,
    basePath: '',
    frameworks: ['jspm', 'jasmine'],
    files: [
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
    ],
    jspm: {
      config: 'config.js',
      loadFiles: [
        'test/**/*.js'
      ],
      serveFiles: [
        'src/**/*.js'
      ],
      paths: {
        "*": "*",
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
      },
    },
    browsers: ['PhantomJS'],
    reporters: ['coverage', 'progress'],
    colors: true,
    logLevel: config.LOG_INFO,
    plugins: ['karma-jspm', 'karma-phantomjs-launcher', 'karma-jasmine', 'karma-coverage', 'karma-babel-preprocessor', 'karma-sourcemap-loader'],
    preprocessors: {
      'src/**/*.js': ['babel', 'sourcemap', 'coverage']
    },
    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        blacklist: ['useStrict']
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },
    coverageReporter: {
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        'src/**/*.js': 'isparta'
      },
      reporters: [{
        type: 'text-summary',
      }, {
        type: 'html',
        dir: 'coverage/',
      }]
    }
  });
};
