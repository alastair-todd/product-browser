module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'specs/*.js'
    ],
    preprocessors: {
      'src/*.js': ['babel', 'browserify'],
      'specs/*.js': ['babel', 'browserify']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015 react']
      }
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['es2015 react'] }]
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
  })
};