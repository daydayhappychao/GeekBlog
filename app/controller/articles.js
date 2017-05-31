const createRule = {
  title: 'string',
  typeId: 'string',
  ctime: 'string',
  content: 'string'
}

exports.create = function* (ctx) {
  ctx.validate(createRule);
  const result = yield ctx.model.Articles.create(ctx.request.body);
  ctx.body = {
    result: result
  };
  ctx.status = 200;
}


exports.index = function* (ctx) {
  const result = yield ctx.model.Articles.find(ctx.request.query);
  ctx.body = result;
  ctx.status = 200;
};

exports.new = function* () { };
exports.show = function* () { };
exports.edit = function* () { };
exports.update = function* () { };
exports.destroy = function* () { };