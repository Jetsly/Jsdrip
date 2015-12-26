var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var sourcemaps = require("gulp-sourcemaps");
var wpstream = require('webpack-stream');
var concat = require("gulp-concat");
var gls = require('gulp-live-server');


gulp.task('styles', ()=>{
  gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

 
gulp.task('templates', ()=>{
  gulp.src('src/layouts/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dist'))
});

gulp.task('scripts', ()=>{
    return gulp.src("src/app/bootstrap.ts")
    .pipe(sourcemaps.init())
    .pipe(wpstream(require('./webpack.config.babel.js')))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/scripts"));
});

gulp.task('serve', ['styles','scripts','templates'],()=>{
  var server = gls.static('dist', 8888);
  server.start();
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/app/**/*.ts', ['scripts']);
  gulp.watch('src/layouts/*.jade', ['templates']);

  gulp.watch(['dist/**/**'], file=>{
    server.notify.apply(server, [file]);
  });
});

gulp.task('default',['serve']);