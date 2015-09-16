var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var SASS_PATH = './sass/*.scss';

gulp.task('sass', function() {
  return gulp.src(SASS_PATH)
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(SASS_PATH, ['sass']);
});

gulp.task('dist', function() {
  del('css/*.css');
  gulp.start('sass');
});

gulp.task('default', ['watch'], function() {
  console.log('Watching all Sass files for changes...');
});
