var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');

gulp.task('default', function () {
  gulp.watch('less/main.less', ['watchify'])
});

gulp.task('watchify', function () {
  gulp.src('less/main.less')
    .pipe(less({
      paths: [path.join(__dirname, 'lessinc')]
    }))
    .pipe(gulp.dest('./css'));
})
