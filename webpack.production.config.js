const merge = require('webpack-merge');
const config = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  optimize: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  stats: {
    errors: true,
    errorDetails: true,
    logging: 'verbose'
  },
  bail: true
});
