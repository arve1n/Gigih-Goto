const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/comments', commentController.createComment);

// Get all comments
router.get('/comments', commentController.getComments);

// Get comments by video ID
router.get('/comments/:videoId', commentController.getCommentsByVideoId);

// Update a comment by ID
router.put('/comments/:id', commentController.updateComment);

// Delete a comment by ID
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;