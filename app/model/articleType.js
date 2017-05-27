/*
 * @Author: Magin 
 * @Date: 2017-05-27 11:06:51 
 * @Last Modified by: Magin
 * @Last Modified time: 2017-05-27 13:17:44
 */
module.exports = app => {
  const mongoose = app.mongoose;
  const ArticleTypeSchema = new mongoose.Schema({
    typeName: { type: String  }
  });

  return mongoose.model('ArticleType', ArticleTypeSchema,'articleType');
}
