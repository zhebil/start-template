const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { getMode } = require('./tasks/settings');

const MODE = getMode();
const DEVTOOL = MODE === 'development' ? 'eval-source-map' : 'none';
const LOADERS = MODE === 'development' ? ['cache-loader'] : ['babel-loader'];

module.exports = {
  mode: MODE,
  entry: {
    bundle: path.join(__dirname, 'src', 'js', 'index.js'),
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'build', 'js'),
    publicPath: './js/',
  },
  devtool: DEVTOOL,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: LOADERS,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Popper: 'popper.js',
    }),
  ],
};
