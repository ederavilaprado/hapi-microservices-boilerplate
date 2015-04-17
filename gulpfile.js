var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

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

function startNodemon(checkCode) {
  var options = {
      script: 'index.js',
      ext: 'js, yml',
      watch: ['./src/', './config/'],
      // ignore: ['ignored.js'],
      env: {
        'NODE_ENV': 'development'
      }
  };

  if (checkCode) options.tasks = ['lint'];

  nodemon(options)
    .on('restart', function() {
      console.log('-------------> restarted!!!'.green);
    })
    .on('crash', function() {
      console.log('-------------> script crashed for some reason!!!'.red);
    });
}

// Starts development with lint check for every restart
gulp.task('dev', function() {
  startNodemon(true);
});

// Starts development with no lint check for every restart
gulp.task('dev:nolint', function() {
  startNodemon(false);
})
