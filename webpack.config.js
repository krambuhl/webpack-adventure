const webpack = require('webpack');
const path = require('path');
const StaticSiteGenerator = require('static-site-generator-webpack-plugin');

const { directories } = require('./package.json');
const { source, output } = directories;

module.exports = {
  entry: {
    main: path.join(__dirname, source.root, 'main.js')
  },
  output: {
    path: path.join(__dirname, output.root),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  extensions: ['', '.js', '.jsx'],
  module: {
    loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000' },
			{ test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000' },
			{ test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new StaticSiteGenerator('main', ['/index.html'], { })
  ]
};
