
const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        //reactionID text need to add
        reactionId: {type:Types.ObjectId, default:()=> {
            return new Types.ObjectId()
        }},
        reactionBody:{type:String, required:true, max:280
        },
        username:{type:String, required:true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //format timestamp
          },
    }
);


module.exports = reactionSchema;