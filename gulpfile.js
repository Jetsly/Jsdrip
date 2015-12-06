var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
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
    return gulp.src("src/app/bootstrap.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
           presets: ['es2015',"stage-0"]
     }))
    .pipe(concat("all.js"))
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