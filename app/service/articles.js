module.exports = app => {
  class ArticlesService extends app.Service {
    constructor(ctx){
      super(ctx);
      this.mongoose = app.mongoose;
    }
    * create(params){
      let result =new  app.model.Articles({
        typeId:'5928e7619fbbed02e4314fe5',
        ctime:new Date(),
        title:'呵呵哒',
        content:'笑死宝宝啦'
      });
      return result;
    }
  }
}