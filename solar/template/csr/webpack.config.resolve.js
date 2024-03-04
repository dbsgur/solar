const path = require('path');

module.exports = {
  extensions: ['.ts', '.tsx', '.js'],
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  alias: {
    '~assets': path.resolve(__dirname, 'src', 'assets'),
    '~libs': path.resolve(__dirname, 'src', 'app', 'libs'),
    '~components': path.resolve(__dirname, 'src', 'app', 'components'),
    '~hooks': path.resolve(__dirname, 'src', 'app', 'hooks'),
    '~models': path.resolve(__dirname, 'src', 'app', 'models'),
    '~repositories': path.resolve(__dirname, 'src', 'app', 'repositories'),
    '~routes': path.resolve(__dirname, 'src', 'app', 'routes'),
    '~screens': path.resolve(__dirname, 'src', 'app', 'screens'),
  },
};
