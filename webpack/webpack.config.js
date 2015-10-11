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
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
     extensions: ['','.js','.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx$/,
        loaders: ['react-hot','awesome-typescript-loader']
      }
    ]
  }
};