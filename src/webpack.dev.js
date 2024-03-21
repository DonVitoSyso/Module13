const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const json = require('./json.json');

module.exports = {
    mode: 'development',
    //mode: 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      //static: './dist',
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      open: true,
      port: 1234,
      hot: 'only', //For dev
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template:'./src/index.html',
        }),
    ],
    output: {
      filename: 'super.js',
      path: path.resolve(__dirname, 'dist'), 
    },

    stats: {
      children: false,
    },

    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto'
        }
      ]
    },
  };