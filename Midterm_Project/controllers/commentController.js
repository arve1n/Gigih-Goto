const Comment = require('../models/Comment');

const commentController = {
  createComment: async (req, res) => {
    try {
      const { content, videoId } = req.body;
      const comment = new Comment({ content, video: videoId });
      await comment.save();
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  getComments: async (req, res) => {
    try {
      const comments = await Comment.find().populate('video');
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  getCommentsByVideoId: async (req, res) => {
    try {
      const comments = await Comment.find({ video: req.params.videoId });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  updateComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(comment);
    } catch (error) {
      res.status(404).json({ error: 'Comment not found' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ error: 'Comment not found' });
    }
  },
};

module.exports = commentController;