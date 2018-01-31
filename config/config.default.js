'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517156299953_4398';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/stamp',
    options: {}
  };

  config.static = {
    qiniu: {
      domain: 'ojqvpsw5o.bkt.clouddn.com',
      path: '/images',
    }
  }

  return config;
};
