module.exports = app => {
  const mongoose = app.mongoose;
  const AdminSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    loginTime: { type: Number },
    loginIP: { type: String }
  });

  return mongoose.model('Admin', AdminSchema, 'admin');
}
