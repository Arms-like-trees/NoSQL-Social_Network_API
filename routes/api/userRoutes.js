const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  excommunicado,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /:userId/friends/:friendId
  router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(excommunicado)



module.exports = router;
