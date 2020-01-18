const puppeteer = require('puppeteer');
const rollupConfig = require('./rollup.config');

process.env.CHROME_BIN = puppeteer.executablePath();
process.env.NODE_ENV = 'test';

module.exports = (config) => {
  config.set({
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
    },
    files: [
      'node_modules/vue/dist/vue.js',
      'src/index.js',
      'test/index.js',
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'src/index.js': ['rollup'],
      'test/index.js': ['rollup'],
    },
    reporters: ['mocha', 'coverage-istanbul'],
    rollupPreprocessor: {
      plugins: rollupConfig.plugins,
      output: {
        format: 'iife',
        name: rollupConfig.output[0].name,
        sourcemap: 'inline',
      },
    },
    singleRun: true,
  });
};
