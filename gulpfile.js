var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var ts = require('gulp-typescript');
var gls = require('gulp-live-server');

var tsProject ={
    typescript: require('typescript'),
    sortOutput: true,
    declarationFiles: true,
    noExternalResolve: false,
    emitDecoratorMetadata: true,
    //declaration: false,
    noImplicitAny: true,
    removeComments: true,
    //noLib: false,
    // use SystemJS to build your files to es5 with System.register wrapper
    //target: 'ES6'
    target: 'ES5',
    module: 'commonjs'  // commonjs (for Node) or amd (eg RequireJS for web)
}
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
        .pipe(ts(tsProject,{
            out: 'main.js'
        }, ts.reporter.longReporter()))
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