const {
  Schema,
  model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const CommentSchema = require('./Comment');
const imageSchema = require('./Image');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
  username: {
    type: String,
    required: true
  },

  images: [imageSchema],

  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  comments: [CommentSchema]

}, {
  toJSON: {
    getters: true,
    virtuals: true
  }
});

productSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Product = model('Product', productSchema);

module.exports = Product;