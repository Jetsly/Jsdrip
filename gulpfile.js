var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');


gulp.task('styles', function () {
  gulp.src('src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/css'));
});

 
gulp.task('templates', function() {
  gulp.src('src/layouts/*.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('dest'))
});

gulp.task('scripts', function () {
    return gulp.src('src/app/**/*.ts')
        .pipe(ts({
            typescript: require('typescript'),
            noImplicitAny: true,
            out: 'main.js'
        }))
        .pipe(gulp.dest('dest/scripts'));
});

gulp.task('serve', ['styles', 'scripts', 'templates'], function() {
  var server = gls.static('dest', 8888);
  server.start();
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/app/**/*.ts', ['scripts']);
  gulp.watch('src/layouts/*.jade', ['templates']);

  gulp.watch(['dest/*'], function (file) {
    server.notify.apply(server, [file]);
  });
});



gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});