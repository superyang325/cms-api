module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({}, app);

  router.get('/', auth, controller.home.index);

  // 登录注册
  router.post('/api/signup', controller.user.signup);
  router.post('/api/signin', controller.user.signin);

  // 
  router.resources('user', '/api/user', controller.user);
  router.resources('role', '/api/role', controller.role);
  router.resources('resource', '/api/resource', controller.resource);
  router.resources('roleResource', '/api/roleResource', controller.roleResource);
  router.resources('roleUser', '/api/roleUser', controller.roleUser);

  //此路由要获取所有的用户
  router.get('/api/role/getUser', controller.role.getUser);
  router.post('/api/role/setUser', controller.role.setUser);
  router.get('/api/role/getResource', controller.role.getResource);
  router.post('/api/role/setResource', controller.role.setResource);

  // 验证码
  router.get('/api/captcha', controller.index.captcha);
  router.post('/api/checkCaptcha', controller.index.checkCaptcha);
};
