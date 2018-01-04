'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');
var child = require('child_process')

// compile the Sass stylesheets
gulp.task('sass', function() {
    return gulp.src('./src/client/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
})

// compress the web sources
gulp.task('webpack', function() {
    return gulp.src('./src/client')
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest('public/'));
});

gulp.task('default', ['webpack']);