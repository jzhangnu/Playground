//doing a quick determination is unknown environment production if so we're gonna
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
//saying our context is currently the directory we are in
  context: __dirname,
//not gonna do sourcemapping if not in debug mode
  devtool: debug ? "inline-sourcemap" : null,
//entry point where we are starting off
  entry: "./js/script.js",
//
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
//for in debug mode no plugins; In production, strip out any duplicate code
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

//if you want to go in NODE_ENV=production webpack, minify
