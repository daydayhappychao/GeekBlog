'use strict';

module.exports = app => {
  app.get('/', 'home.index2');
  app.resources('articles','/api/articles',app.controller.articles);
  app.resources('articleType','/api/articletype',app.controller.articleType);
};
