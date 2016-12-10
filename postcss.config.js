module.exports = {
  'use': ['postcss-cssnext', 'postcss-focus', 'postcss-inline-svg', 'cssnano'],
  'input': './static/styles/main.css',
  'output': './static/styles/main.css',
  'local-plugins': true,
  'cssnano': {
    'discardComments': {
      'removeAll': true
    },
    'zindex': false
  },
  /*'postcss-pxtorem': {
    'rootValue': 14,
    'replace': false,
    'selectorBlackList': ['body', 'html']
  },*/
  /*'postcss-sprites': {
    'stylesheetPath': './dist/css',
    'spritePath': './dist/css/sprites',
    'basePath': './dist/images',
    filterBy: function(image) {
      // Allow only png files
      if (!/\.png$/.test(image.url)) {
        return Promise.reject();
      }
      return Promise.resolve();
    }
  },
  'postcss-font-magician': {
    'foundries': 'bootstrap google',
    'hosted': './dist/fonts'
  }*/
};