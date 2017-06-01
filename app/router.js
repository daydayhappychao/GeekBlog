'use strict';

module.exports = app => {
  const checkLogin = app.middlewares.checkLogin({});
  app.get('/', 'home.index2');
  app.resources('articles','/api/articles',app.controller.articles);
  app.resources('articleType','/api/articletype',app.controller.articleType);
  app.get('/wangchao',checkLogin,'admin.index');
  app.get('/wangchao/login','login.index');
  app.post('/wangchao/login','login.login')
};
