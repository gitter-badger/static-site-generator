// Dependencies
import config from './config';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import ts from 'gulp-typescript';


function isFixed(file) {
    // Has ESLint fixed the file contents?
    return file.eslint != null && file.eslint.fixed;
}

export function dev() {
    const tsResult = gulp.src([
        config.paths.source.scripts + '/**/*.ts',
        '!' + config.paths.source.scripts + '/_modules/**/*.ts',
    ])
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: 'system',
            noImplicitAny: true,
            target: 'ES5',
        }));

    return tsResult.js
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.paths.build.scripts));
}

export function prod() {}

// https://github.com/adametry/gulp-eslint/blob/master/example/fix.js
export function fix() {
    // Modules loaded here, because they are only needed for this task and it will only run once (performance improvement)
    const eslint = require('gulp-eslint');
    const gulpIf = require('gulp-if');

    return gulp.src(config.paths.source.scripts + '/**/*.js')
        .pipe(eslint({
            fix: true, // Fix lint errors
        }))
        .pipe(gulpIf(isFixed, gulp.dest(config.paths.source.scripts)));
}

export function lint() {
    // Modules loaded here, because they are only needed for this task and it will only run once (performance improvement)
    const eslint = require('gulp-eslint');

    return gulp.src(config.paths.source.scripts + '/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
}
