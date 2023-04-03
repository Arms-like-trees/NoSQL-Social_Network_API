const {Schema, Types, model} = require('mongoose');
const reactionSchema = require('./reaction')


const thoughtSchema = new Schema(
    {
        thoughtText: {type:String, required:true, min:1, max:280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //format timestamp
          },
          username:{type:String, required:true
          },
          reactions: [reactionSchema]
    },
    {
        tojson:{
            getters: true,
          }
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
//double check this is correct

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;