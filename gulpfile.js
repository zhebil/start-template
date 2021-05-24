const { series, parallel } = require('gulp');
const clean = require('./tasks/clean');
const markup = require('./tasks/markup');
const style = require('./tasks/style');
const javascript = require('./tasks/javascript');
const image = require('./tasks/image');
const json = require('./tasks/json');
const serve = require('./tasks/serve');
const fonts = require('./tasks/fonts');

module.exports = {
  clean,
  build: series(clean, parallel(markup, style, javascript, image, json, fonts)),
  deploy: series(
    clean,
    parallel(markup, style, javascript, image, json, fonts)
  ),
  default: series(
    clean,
    parallel(markup, style, javascript, image, json, fonts, serve)
  ),
};
