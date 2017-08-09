var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))

});

gulp.task('default', ['sass' ]);
