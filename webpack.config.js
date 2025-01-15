const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'www');

module.exports = {
  // Setting context path, so that relative imports will be resolved relative to this path
  // i.e., Path in context becomes root path for resolving relative imports
  context: srcPath,
  entry: {
    index: 'index.js'
  },
  output: {
    path: distPath,
    publicPath: '', // assets will be resolved to relative path
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'), // Absolute path to template
    }),
  ],
  resolve: {
    modules: [srcPath, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|gif|jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/images/[hash].[ext]',
          },
        },
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serve index.html from public directory
    hot: true,
    open: true,
  },
  devtool: 'source-map',
  bail: true,
  stats: 'info',
};
