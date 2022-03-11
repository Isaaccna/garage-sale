const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

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
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
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
