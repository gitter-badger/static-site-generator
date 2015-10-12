// Dependencies
var changed = require('gulp-changed');
var gulp = require('gulp');
var replace = require('gulp-replace');

// Variables
var source_base = 'source';
var build_base = 'build';

gulp.task('copy', ['copy:base', 'copy:cache-manifest', 'copy:libraries'], function() {});

export function base() {
    return gulp.src([
        source_base + '/robots.txt',
        source_base + '/sitemap.xml',
        source_base + '/.htaccess',
        source_base + '/humans.txt',
    ])
        .pipe(changed(build_base))
        .pipe(gulp.dest(build_base));
}

export function cacheManifest() {
    return gulp.src(source_base + '/cache.appcache')
        .pipe(replace('RANDOMIZE-ME', new Date().getTime()))
        .pipe(gulp.dest(build_base));
}

export function libraries() {
    return gulp.src(source_base + '/assets/libraries/**/*')
        .pipe(changed(build_base + '/assets/libs'))
        .pipe(gulp.dest(build_base + '/assets/libs'));
}