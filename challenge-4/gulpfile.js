// add necessary modules
var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// runs js minification from 'js/scripts.js' and outputs to 'dist/scripts.min.js'
gulp.task('js', function(){    
    return gulp.src(['js/scripts.js'])          
        .pipe(concat('scripts.js'))       
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))       
        .pipe(gulp.dest('dist')); 
});

// CLI Command: gulp js