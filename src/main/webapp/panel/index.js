const common = require('common.js');
const util = require('../shared/utils/index');
const lodash = require('lodash');

util.log(lodash.get(common, 'settings.env'));
