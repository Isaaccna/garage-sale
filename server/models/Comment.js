const { Schema } = require('mongoose');
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
        getters: true
      }
    }
)

const commentSchema = new Schema(
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

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema)



module.exports = commentSchema;
