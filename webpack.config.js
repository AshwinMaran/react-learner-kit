var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

var contentBase = path.join(__dirname, 'examples');

module.exports = {
  devtool: '#eval',

  entry: fs.readdirSync(contentBase).reduce(function (entries, dir) {

    if (isDirectory(path.join(contentBase, dir))) {
      entries[dir] = [
        path.join(contentBase, dir, 'app.js'),
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
      ];
    }
    return entries;
  }, {}),
  output: {
    path: path.join(contentBase, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'examples')
    },
    {
      test: /\.css?$/,
      loader: 'style!css'
    }]
  }
};
