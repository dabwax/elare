var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('css', function () {
  gulp.src('./css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch(['css/**/*.styl'], ['css']);
});

gulp.task('default', ['css', 'watch']);