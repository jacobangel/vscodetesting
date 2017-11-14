const common = require('config/common');
const util = require('utils/index');
const get = require('lodash/get');

const main = () => {
  util.log(get(common, 'settings.env'));
};

module.exports = main;