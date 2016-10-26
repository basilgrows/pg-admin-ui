'use strict';

// UX CT Angular Boilerplate Generator

var build = 'build';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var del = require('del');
var concat = require('gulp-concat-sourcemap');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('clean', function () {
	return del([build]);
});

gulp.task('sass', function() {
    return gulp.src('assets/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(build + '/css'))
        .pipe(browserSync.stream());
});

gulp.task('templates', function() {
    return gulp.src('app/**/*.template.html')
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(build + '/js'));
});

gulp.task('js', ['templates'], function() {
    return gulp.src(['app/**/*.js'])
        .pipe(concat('app.js', {sourcesContent: true}))
        .pipe(gulp.dest(build + '/js'));
})

gulp.task('copy:index', function () {
    return gulp.src(['index.html']).pipe(gulp.dest(build));
});

gulp.task('copy:assets', function () {
    return gulp.src(['assets/js/**/*', 'assets/libs/**/*', 'assets/images/**/*'], {
        base: 'assets'
    }).pipe(gulp.dest(build));
});

gulp.task('build', function(callback) {
  runSequence('clean',
              ['sass', 'js', 'copy:index', 'copy:assets'],
              callback);
});

gulp.task('serve', ['build'], function() {

    browserSync.init({
        server: build
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("app/**/*.js", ['js']);
    gulp.watch("app/**/*.template.html", ['templates']);
    gulp.watch("index.html", ['copy:index']);
    gulp.watch(['assets/js/**/*', 'assets/libs/**/*', 'assets/images/**/*'], ['copy:assets']);
    
    gulp.watch([build + "/**/*.html", build + "/js/*", build + "/libs/*"]).on('change', browserSync.reload);
});