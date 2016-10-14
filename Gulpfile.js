'use strict';
// This is the gulp file. It will help with building, running, and overall managing the entire project automatically.

var electron = require('electron-prebuilt');
var childProcess = require('child_process');
var gulp = require('gulp');

// A simple task (called 'run') that starts the electron process.
// Instead of running on the top level directory (the one with this file),
// we move into the ./app directory and run the electron project within there
gulp.task('run', function () {
    childProcess.spawn(electron, ['./app'], { stdio: 'inherit' });
});
