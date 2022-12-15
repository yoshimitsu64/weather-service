const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@styles': 'src/styles',
    '@interfaces': 'src/interfaces',
    '@hooks': 'src/hooks',
    '@store': 'src/store',
    '@helpers': 'src/helpers',
    '@api': 'src/api',
    '@customTypes': 'src/customTypes',
    '@assets': 'src/assets',
  })(config);
  return config;
};
