module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: [
        "spec/*Spec.js"
    ],
    preprocessors: {
        'src/*.js': ['webpack'],
        'spec/*Spec.js': ['webpack'],
    },
    webpack: {
      module: {
        loaders: [
          {
              test: /\.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  presets: ['react', 'es2015']
              }
          }
        ],
      }
    },
    webpackMiddleware: {
        noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    browserNoActivityTimeout: 30000
  })
}
