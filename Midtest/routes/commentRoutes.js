const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Route to get all comments
router.get('/', commentController.getAllComments);

// Route to get a specific comment by CommentID
router.get('/:id', commentController.getCommentById);

// Route to create a new comment
router.post('/', commentController.createComment);

// Route to update a comment by CommentID
router.put('/:id', commentController.updateCommentById);

// Route to delete a comment by CommentID
router.delete('/:id', commentController.deleteCommentById);

module.exports = router;
