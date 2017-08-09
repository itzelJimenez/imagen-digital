var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('sass', function(){
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({outputStyle: "compressed"})
            .on("error", sass.logError))
        .pipe(gulp.dest('public' + '/css'))
});



gulp.task('default', ['sass' ]);
