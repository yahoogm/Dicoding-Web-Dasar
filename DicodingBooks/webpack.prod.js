const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  }
});
