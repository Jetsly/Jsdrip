var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var sourcemaps = require("gulp-sourcemaps");
var webpack = require('webpack-stream');
var concat = require("gulp-concat");
var gls = require('gulp-live-server');


gulp.task('styles', function () {
  gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

 
gulp.task('templates', function() {
  gulp.src('src/layouts/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function () {
    return gulp.src("src/app/bootstrap.ts")
    .pipe(sourcemaps.init())
    .pipe(webpack({
        devtool: 'source-map',
        debug: true,
        cache: true,
      
        verbose: true,
        displayErrorDetails: true,
        context: __dirname,
        stats: {
          colors: true,
          reasons: true
        },
        watch: true,
        entry:{
          'angular2': [
              // Angular 2 Deps
              '@reactivex/rxjs',
              'zone.js',
              'reflect-metadata',
              // to ensure these modules are grouped together in one file
              'angular2/angular2',
              'angular2/core',
              'angular2/router',
              'angular2/http'
            ],
          'app': [
            "src/app/bootstrap.ts"
          ]  
        },
        // Config for our build files
        output: {
          path: path.join(__dirname, 'dist/assets/js'), 
          filename: '[name].js',
          sourceMapFilename: '[name].js.map',
          chunkFilename: '[id].chunk.js'
          // publicPath: 'http://mycdn.com/'
        },      
        resolve: {
          root: __dirname,
          extensions: ['','.ts','.js','.json'],
          alias: {
            'rxjs': path.join(__dirname,'node_modules/@reactivex/rxjs/src')
            // 'common': 'src/common',
            // 'bindings': 'src/bindings',
            // 'components': 'src/app/components'
            // 'services': 'src/app/services',
            // 'stores': 'src/app/stores'
          }
        },
        module: {
          loaders: [
            { 
              test: /\.ts$/,   
              loader: 'ts',
              exclude: [
                /\.min\.js$/,
                /\.spec\.ts$/,
                /\.e2e\.ts$/,
                /node_modules/
              ]}
          ]
        },
        noParse: [
          /rtts_assert\/src\/rtts_assert/,
          /reflect-metadata/
        ]        
     }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/script"));
});

gulp.task('serve', ['styles', 'scripts', 'templates'], function() {
  var server = gls.static('dist', 8888);
  server.start();
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/app/**/*.ts', ['scripts']);
  gulp.watch('src/layouts/*.jade', ['templates']);

  gulp.watch(['dist/*'], function (file) {
    server.notify.apply(server, [file]);
  });
});



gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});