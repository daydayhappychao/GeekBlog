'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1495538857414_698';

  // add your config here
  config.mongoose = {
    url: 'mongodb://111.231.0.205/blog',
    options: {}
  };
  return config;
};
