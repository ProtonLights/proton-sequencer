'use strict';

var electron = require('electron-prebuilt');
var gulp = require('gulp');

gulp.task('run', function () {
    childProcess.spawn(electron, ['./app'], { stdio: 'inherit' });
});
