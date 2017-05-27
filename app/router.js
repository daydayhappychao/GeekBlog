'use strict';

module.exports = app => {
  app.get('/', 'home.index2');
  app.get('/getArticleTypes','home.getArticleTypes')
};
