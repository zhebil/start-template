const { src, dest, lastRun } = require('gulp');
const { pathMap } = require('./settings');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const config = require('../webpack.config');

function javascript() {
  return src(`${pathMap.src.javascript}/*.js`, {
    since: lastRun(javascript),
  })
    .pipe(plumber())
    .pipe(webpack({ ...config }))
    .pipe(dest(`${pathMap.build.javascript}`))
    .pipe(browserSync.stream());
}

module.exports = javascript;
