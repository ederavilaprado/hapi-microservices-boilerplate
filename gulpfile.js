var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(
      jscs({
        preset: 'airbnb',
        disallowAnonymousFunctions: true,
        maxErrors: 100
      })
    );
});
