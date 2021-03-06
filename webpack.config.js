/* globals __dirname process */
'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/app.jsx',
  mode: process.env.NODE_ENV || 'development',
  performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      hints: process.env.NODE_ENV === 'production' ? "warning": false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'vizceral.[hash].bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.woff2?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.otf$/, loader: 'file-loader' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automtically detect jQuery and $ as free var in modules
      // and inject the jquery library
      // This is required by many jquery plugins
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.DefinePlugin({
      __HIDE_DATA__: !!process.env.HIDE_DATA
    }),
    new HtmlWebpackPlugin({
      title: 'Vizceral',
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true
    }),
    new Dotenv({
      path: './.env',
      safe: false,
      systemvars: true
    })
  ]
};
