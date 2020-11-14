const mongoose = require('mongoose');
  
const AuthSchema = new mongoose.Schema({
	sessionId:{type:String},
  name: { type: String },
  type: { type: String },
  secret:{type:String},
  date:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('Auth', AuthSchema);
