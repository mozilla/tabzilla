var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch'),
    del = require('del'),
    path = require('path');

gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'libs')]
        }))
        .pipe(gulp.dest('css'))
        .pipe(rename('_tabzilla.scss'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['less'], function() {
    gulp.watch('less/**/*.less', ['less']);
});

gulp.task('dist', function() {
    del('css');
    gulp.start('less');
});

gulp.task('default', ['watch'], function() {
    console.log('Watching all LESS files for changes...');
});
