var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  //module
  output: {
    path: __dirname + "/src/",
    filename: "main.min.js"
  }
};
