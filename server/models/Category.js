const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

// single category can have multiple products
// category array of products?
// product with tags - array of tags
// deploy to heroku (testing)

// file upload - make sure doing verification, file extension matches, etc.
// check image size