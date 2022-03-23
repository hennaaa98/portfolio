var gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('styles/scss/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('styles/css'))
    });
    
