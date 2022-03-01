const router = require('express').Router();
const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');

//Set up POST callback at /api/comments/:pizzaId
router
    .route('/:pizzaId')
    .post(addComment);

//Set up a DELETE callback at /api/comments/:pizzaID/:commentId
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;