const {Schema, Types, model} = require('mongoose');

const userSchema = new Schema(
    {
        //placeholder
        username: {type:String, unique:true, required:true, trim:true 
        },
        email: {
            type:String, required:true, unique:true, match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            //double check that i have the email validation correct
        },
        thoughts: [{
            type:Schema.Types.ObjectId,
            ref:'Thought'
        }],
        friends: [{
            type:Schema.Types.ObjectId,
            ref:'User'
        }]
    },
    {
        toJSON: {
            virtuals:true,
            getters: true,
          }
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', userSchema);
module.exports = User;