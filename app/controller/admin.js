module.exports = app => {
  class AdminController extends app.Controller {
    * index() {
        yield this.ctx.render('hello.ejs', { data: '1122' })
        this.ctx.status = 200
    
    }
  }
  return AdminController;
}