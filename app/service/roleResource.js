const {Service} = require('egg');
let BaseService = require('./base');
class UserService extends BaseService{
  constructor(...args){
      super(...args);
      this.entity = 'role_resource';
  }
}
module.exports = UserService;