module.exports = app => {
  const mongoose = app.mongoose;
  const ArticlesSchema = new mongoose.Schema({
    typeId: { type: String },
    ctime: { type: Number },
    title: { type: String },
    content: { type: String }
  });

  return mongoose.model('Articles', ArticlesSchema, 'article');
}
