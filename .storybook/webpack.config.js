// https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
const path = require('path');

module.exports = ({ config }) => {
  config.resolve.extensions.push('.js', '.jsx');
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');
  config.resolve.alias['@fonts'] = path.resolve(__dirname, '../public/fonts');

  return config;
};
