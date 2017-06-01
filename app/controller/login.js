module.exports = app => {
  class LoginController extends app.Controller {
    * index() {
      yield this.ctx.render('login.ejs');
      this.ctx.status = 200
    };
    * login() {
      let username = this.ctx.request.body.username;
      let password = this.ctx.request.body.password;
      console.log(this.ctx.request.body.username);
      console.log(this.ctx.request.body.password);
      if (!(username && password)) {
        yield this.ctx.render('login.ejs', { data: '输入不完整' })
        this.ctx.status = 200
      } else {
        let result = yield this.ctx.model.Admin.findOne({ username: username });
        console.log(result);
        if (result.password == password) {
          this.ctx.session.admin = result;
          this.ctx.redirect('/wangchao');
        } else {
          yield this.ctx.render('login.ejs', { data: '密码错误' })
          this.ctx.status = 200
        }
      }
    }
  }
  return LoginController;
}