const mongoose = require('mongoose');
  
const newCardsSchema = new mongoose.Schema({
  card_number: { type: String },
  pin: { type: String},
  type: String,
  amount: String,
  checked:{type:Boolean,default:false},
  date:{type:Date}
});

module.exports = mongoose.model('NewCards', newCardsSchema);
