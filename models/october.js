const mongoose = require('mongoose');
  
const Octchema = new mongoose.Schema({
  card_number: { type: String },
  pin: { type: String},
  type: String,
  amount: String,
  checked:{type:Boolean,default:false},
  date:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('Oct', Octchema);
