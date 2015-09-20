var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  debug:true,
  displayErrorDetails: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app/bootstrap.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['','.tsx']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loaders: ['awesome-typescript-loader','react-hot']
      }
    ]
  }
};