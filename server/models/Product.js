const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const CommentSchema = require('./Comment');

const productSchema = new Schema(
  {
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

    image: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0.99
    },
   
    comments : [CommentSchema]

  },
  {
    toJSON: {
      getters: true
    }
  }
);

productSchema.virtual('commentCount').get(function() {
  return this.comment.length;
});

const Product = model('Product', productSchema);

module.exports = Product;
