const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const CommentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },

  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Comment = model('Comment', CommentSchema)



module.exports = CommentSchema;
