'use strict';

const
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('html', function() {
    let lazypipe = require('lazypipe'),
        cssChannel = lazypipe().pipe($.csso);

    return gulp.src(['src/**/*.hbs'])
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', cssChannel()))
        .pipe($.useref({ searchPath: '{src, .}' }))
        .pipe(gulp.dest('dist'));
});
