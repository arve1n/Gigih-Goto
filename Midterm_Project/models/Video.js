const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
});

module.exports = mongoose.model('Video', videoSchema);