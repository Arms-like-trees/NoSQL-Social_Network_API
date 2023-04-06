const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    removeThought,
} = require('../../controllers/thoughtContoller');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtsId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);


  module.exports = router;