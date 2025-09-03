'use strict';

/**
 * Default dev server configuration.
 */
const webpack = require('webpack');
const WebpackBaseConfig = require('./Base');

class WebpackDevConfig extends WebpackBaseConfig {

  constructor() {
    super();
    this.config = {
      //devtool: 'cheap-module-source-map',
      devtool: 'inline-source-map',
      entry: [
        'webpack-dev-server/client?http://0.0.0.0:4567/',
        'webpack/hot/only-dev-server',
        './index.js'
      ],
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
      ]
    };
  }
}

module.exports = WebpackDevConfig;
