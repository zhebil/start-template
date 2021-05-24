const process = require('process');

const pathMap = {
  src: {
    pug: 'src/templates',
    sass: 'src/styles',
    javascript: 'src/js',
    images: 'src/img',
    json: 'src/json',
    fonts: 'src/fonts',
    sprite: 'src/sprite',
  },
  build: {
    main: 'build',
    html: 'build',
    css: 'build/css',
    javascript: 'build/js',
    images: 'build/img',
    json: 'build/json',
    fonts: 'build/fonts',
    sprite: 'build/img',
  },
};

const getMode = () => {
  const mode = process.argv.filter(item => item.startsWith('--mode='));

  if (mode.length) {
    return mode[0].split('--mode=')[1];
  }

  return 'development';
};

module.exports = {
  pathMap,
  getMode,
};
