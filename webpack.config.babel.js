// @AngularClass

/*
 * Helper
 * are defined at the bottom
 */
var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var NODE_ENV  = process.env.NODE_ENV || 'development';
var pkg = require('./package.json');

// Polyfill

// Node
var path = require('path');

// NPM
var webpack = require('webpack-stream').webpack;


// Webpack Plugins
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var DefinePlugin   = webpack.DefinePlugin;

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'Angular2 Webpack Starter by @gdi2990 from @AngularClass',
  baseUrl: '/',
  host: 'localhost',
  port: 3000,
  ENV: ENV
};
/*
 * Config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true,
  //
  entry: {
    'vendor': './src/vendor.ts',
    'main': './src/main.ts' // our angular app
  },

  // Config for our build files
  output: {
    path: root('dist/scripts'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
    // publicPath: 'http://mycdn.com/'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.ts','.js','.json','.css','.html']
  },

  module: {
    loaders: [
      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },
      { test: /\.html$/,  loader: 'raw-loader' },
      // Support for .ts files.
      {
        test: /\.ts$/,    loader: 'ts',
        exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
      }
    ]
  },

  plugins: [
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
    new DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV)
      }
    })
  ],

  // we need this due to problems with es6-shim
  node: {global: 'window', progress: false, crypto: 'empty', module: false, clearImmediate: false, setImmediate: false}
};


function root(args) {
  args = sliceArgs(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}