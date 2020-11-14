const mongoose = require('mongoose');
  
const CardsSchema = new mongoose.Schema({
  name: { type: String },
  link: { type: String }
});

module.exports = mongoose.model('Card', CardsSchema);
