const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
      reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
      },

      reactionBody: {
          type: String,
          required: true,
          minLength: 1,
          maxLength: 280
      },

      username: {
          type: String,
          required: true,
        },
      
       createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
        },

  },
  {
      toJSON: {
        getters: true,
        virtuals: true,
      }
    }
)

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

    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

CommentSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Comment = model('Comment', CommentSchema)



module.exports = CommentSchema;
