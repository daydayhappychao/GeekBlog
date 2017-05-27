'use strict';


module.exports = app => {
  
  class HomeController extends app.Controller {
    * index2() {
      this.ctx.body = 'hi, egg';
    }

    * getArticleTypes(){
      let res = {
        status:0,
        data:yield app.model.ArticleType.find({})
      }
      this.ctx.body = res;
    }
  }
  return HomeController;
};
