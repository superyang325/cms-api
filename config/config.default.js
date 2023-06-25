module.exports = appInfo => {

  const config = exports = {};

  config.keys = appInfo.name + '_1565179334708_8215';

  config.middleware = [];
  
  //app.mysql.query();
  const userConfig = {
    security:{
      csrf:{ enable: false },
      domainWhiteList: [ 'http://127.0.0.1:8000' ],
    },
    cors:{
      credentials:true
    },
    JWT_SECRET:'superyang',
    mysql:{
      client:{
        host:'localhost',
        port:3306,
        user:'root',
        password:'yang@123456',
        database:'cms-api'
      }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
