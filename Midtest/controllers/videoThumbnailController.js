const { VideoThumbnail } = require('../models/models');

// Get all video thumbnails and show urlImageThumbnail
exports.getAllVideoThumbnails = async (req, res) => {
  try {
    const videoThumbnails = await VideoThumbnail.find();
    const urlImageThumbnails = videoThumbnails.map((thumbnail) => thumbnail.UrlImageThumbnail);
    res.json(urlImageThumbnails);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching video thumbnails' });
  }
};

// Get the detail of a specific video by VideoID
exports.getVideoThumbnailById = async (req, res) => {
  const videoID = req.params.id;
  try {
    const videoDetails = await VideoThumbnail.findOne({ VideoID: videoID });
    if (!videoDetails) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(videoDetails);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching video details' });
  }
};

// Create a new video thumbnail
exports.createVideoThumbnail = async (req, res) => {
  const { VideoID, UrlImageThumbnail } = req.body;
  try {
    const newVideoThumbnail = new VideoThumbnail({ VideoID, UrlImageThumbnail });
    await newVideoThumbnail.save();
    res.status(201).json(newVideoThumbnail);
  } catch (err) {
    res.status(400).json({ message: 'Error creating new video thumbnail' });
  }
};

// Update a video thumbnail by VideoID
exports.updateVideoThumbnailById = async (req, res) => {
  const videoID = req.params.id;
  const { UrlImageThumbnail } = req.body;
  try {
    const videoThumbnail = await VideoThumbnail.findOne({ VideoID });
    if (!videoThumbnail) {
      return res.status(404).json({ message: 'Video thumbnail not found' });
    }
    videoThumbnail.UrlImageThumbnail = UrlImageThumbnail;
    await videoThumbnail.save();
    res.json(videoThumbnail);
  } catch (err) {
    res.status(500).json({ message: 'Error updating video thumbnail' });
  }
};

// Delete a video thumbnail by VideoID
exports.deleteVideoThumbnailById = async (req, res) => {
  const videoID = req.params.id;
  try {
    const videoThumbnail = await VideoThumbnail.findOneAndDelete({ VideoID });
    if (!videoThumbnail) {
      return res.status(404).json({ message: 'Video thumbnail not found' });
    }
    res.json({ message: 'Video thumbnail deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting video thumbnail' });
  }
};