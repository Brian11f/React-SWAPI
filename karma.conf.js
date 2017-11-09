// Reference: http://karma-runner.github.io/0.13/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Set framework to mocha
      'mocha'
    ],

    reporters: [
      // Set reporter to print detailed results to console
      'spec',

      // Output code coverage files
      'coverage'
    ],

    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',

      // Grab all files in the tests directory that contain _test.
      'tests/**/*_test.*'
    ],

    preprocessors: {
      // Convert files with webpack and load sourcemaps
      'tests/**/*_test.*': ['webpack', 'sourcemap'],
      'app/**/*.*': 'coverage'
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      reporters: [
        // generates ./coverage/lcov.info
        {
          type: 'lcovonly',
          subdir: '.'
        },
        // generates ./coverage/coverage-final.json
        {
          type: 'json',
          subdir: '.'
        },
        // generates ./coverage/index.html
        {
          type: 'html',
          subdir: '.'
        }
      ]
    },

    // Test webpack config
    webpack: require('./webpack.config'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: true
    }
  })
}
