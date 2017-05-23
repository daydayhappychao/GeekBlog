'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index2() {
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
