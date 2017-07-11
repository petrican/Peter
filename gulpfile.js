'use strict';

require('es6-promise').polyfill();

var gulp = require('gulp'),
 prefixer = require('gulp-autoprefixer'),
 uglify = require('gulp-uglify'),
 sass = require('gulp-sass'),
 rigger = require('gulp-rigger'),
 cssmin = require('gulp-cssnano'),
 rimraf = require('rimraf');

var path = {
 build: {
  tmpl: 'public/assets/javascripts/tmpl/', 
  js: 'public/assets/javascripts'
 },
 src: {
  tmpl: 'public/javascripts/tmpl/**/*.*',
  js: 'public/javascripts/core.js'
 }
};

gulp.task('clean', function (cb) {
 rimraf(path.clean, cb);
});

gulp.task('tmpl:build', function() {
 gulp.src(path.src.tmpl)
  .pipe(gulp.dest(path.build.tmpl))
});


gulp.task('js:build', function () {
 gulp.src(path.src.js) 
  .pipe(rigger()) 
  //.pipe(uglify({mangle: false})) 
  .pipe(gulp.dest(path.build.js));
});


gulp.task('build', [
 'tmpl:build',
 'js:build'
]);



gulp.task('default', ['build']);
