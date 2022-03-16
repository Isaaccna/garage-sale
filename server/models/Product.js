const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');
// require model for type: [Category]

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
    quantity: {
      type: Number,
      min: 1,
      default: 1
    },
    category: {
      // type: Schema.Types.ObjectId,
      type: [Category],
      ref: 'Category',
      required: true,
      default: undefined
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }

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
