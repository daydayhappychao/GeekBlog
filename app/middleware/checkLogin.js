module.exports = () => {
  return function* checkLogin(next) {
    yield next
    console.log(this.session)
    if (!this.session.admin) {
      this.redirect('/wangchao/login');
      
    }
  }
}