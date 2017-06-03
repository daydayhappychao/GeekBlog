module.exports = app => {
  class AdminController extends app.Controller {
    * index() {
      let articleTypes = yield this.ctx.model.ArticleType.find({});
      console.log(articleTypes);
      yield this.ctx.render('index.ejs', { articleTypes: articleTypes })
      this.ctx.status = 200

    }
  }
  return AdminController;
}