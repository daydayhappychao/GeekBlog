const createRule = {
  typeName:'String'
}

exports.create = function* (ctx) {
  ctx.validate(createRule);
  const result = yield ctx.model.ArticleType.create(ctx.request.body);
  ctx.body = {
    result: result
  };
  ctx.status = 200;
}


exports.index = function* (ctx) {
  const result = yield ctx.model.ArticleType.find(ctx.request.query);
  ctx.body = result;
  ctx.status = 200;
};

exports.new = function* () { };
exports.show = function* () { };
exports.edit = function* () { };
exports.update = function* () { };
exports.destroy = function* () { };