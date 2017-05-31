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
  config.security = {
    xframe: {
      enable: false,
    },
    domainWhiteList: ['http://localhost:666']
  };
  config.validate = {
    enable: true,
    package: 'egg-validate',
  }
  return config;
};
