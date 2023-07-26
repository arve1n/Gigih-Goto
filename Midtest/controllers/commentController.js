const { Comment } = require('../models/models');

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};

// Get a specific comment by CommentID
exports.getCommentById = async (req, res) => {
  const commentID = req.params.id;
  try {
    const comment = await Comment.findById(commentID);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comment' });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  const { Username, CommentText } = req.body;
  try {
    const newComment = new Comment({ Username, Comment: CommentText });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Error creating new comment' });
  }
};

// Update a comment by CommentID
exports.updateCommentById = async (req, res) => {
  const commentID = req.params.id;
  const { CommentText } = req.body;
  try {
    const comment = await Comment.findByIdAndUpdate(commentID, { Comment: CommentText }, { new: true });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error updating comment' });
  }
};

// Delete a comment by CommentID
exports.deleteCommentById = async (req, res) => {
  const commentID = req.params.id;
  try {
    const comment = await Comment.findByIdAndDelete(commentID);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting comment' });
  }
};
