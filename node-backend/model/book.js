const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Book = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  }, 
  creator: { type : mongoose.Schema.Types.ObjectId, ref: "User", required: true}

}, {
  collection: 'books'
})
 
module.exports = mongoose.model('Book', Book)