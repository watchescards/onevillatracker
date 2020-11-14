const mongoose = require('mongoose');
  
const ProductSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String},
  description: String,
  price: String
});

module.exports = mongoose.model('Product', ProductSchema);
