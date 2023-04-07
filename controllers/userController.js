
const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that Id'})
                :res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    //update a user by it _id
    updateUser(req, res) {
        User.findByIdAndUpdate(
            { _id:req.params.userId},
            { $set:req.body},
            {runValidators: true, new:true}
        )
        .then((user) => 
        !user
            ? res.status(404).json({message: 'No user with this ID'})
            : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //delete a user by its _id
    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.userId})
        .then((user) =>
        !user
            ? res.status(404).json({message: 'No user with that ID'})
            //how to also delet via associated thoguths? is what i have below correct?
            : Thought.deleteMany({ _id: { $in: user.thoughts}})
        )
        .then(() => res.json({ message: 'User and associated thoughts deleted'}))
        .catch((err) => res.status(500).json(err));
    },

    //addFriend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No friends added' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },


    //delete a friend
    excommunicado(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { friendId: req.params.friendId } } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Excommunicado' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }

};

