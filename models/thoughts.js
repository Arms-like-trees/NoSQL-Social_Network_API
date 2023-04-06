const {Schema, Types, model} = require('mongoose');
const reactionSchema = require('./reaction')


const thoughtSchema = new Schema(
    {
        thoughtText: {type:String, required:true, min:1, max:280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //format timestamp with getters
          },
          username:{type: Schema.Types.ObjectId, ref: 'User'
          },
          reactions: [reactionSchema]
    },
    {
        tojson:{
            virtuals:true
          }
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
thoughtSchema.virtual('formatCreatedAt').get(function() {
    return new Date(this.createdAt).toLocaleDateString
});
//double check this is correct

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;