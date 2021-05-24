const { src, dest } = require('gulp');
const { pathMap, getMode } = require('./settings');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

const MODE = getMode();
const PLUGINS = [autoprefixer(), cssnano()];

function style() {
  return src(`${pathMap.src.sass}/index.scss`)
    .pipe(plumber())
    .pipe(gulpIf(MODE === 'development', sourcemaps.init('')))
    .pipe(
      sass({
        includePaths: ['node_modules'],
        outputStyle: 'compressed',
      })
    )
    .pipe(postcss(PLUGINS))
    .pipe(
      rename({
        basename: 'style',
        suffix: '.min',
      })
    )
    .pipe(gulpIf(MODE === 'development', sourcemaps.write('')))
    .pipe(dest(pathMap.build.css))
    .pipe(browserSync.stream());
}

module.exports = style;
