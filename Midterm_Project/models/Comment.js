const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

module.exports = mongoose.model('Comment', commentSchema);