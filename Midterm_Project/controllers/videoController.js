const youtubeThumbnail = require('youtube-thumbnail');
const Video = require('../models/Video');

const videoController = {
    createVideo: async (req, res) => {
      try {
        const { title, youtubeUrl } = req.body;
        const thumbnail = await youtubeThumbnail(youtubeUrl);
        const thumbnailUrl = thumbnail.medium.url;
        const video = new Video({ title, youtubeUrl, thumbnailUrl });
        await video.save();
        res.status(201).json(video);
      } catch (error) {
        console.error(error); // Log the error for debugging purposes
        console.error(req.body)
        res.status(500).json({ error: 'Something went wrong' });
      }
    },

  getVideos: async (req, res) => {
    try {
      const videos = await Video.find();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  },

  getVideoById: async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      res.json(video);
    } catch (error) {
      res.status(404).json({ error: 'Video not found' });
    }
  },

  updateVideo: async (req, res) => {
    try {
      const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(video);
    } catch (error) {
      res.status(404).json({ error: 'Video not found' });
    }
  },

  deleteVideo: async (req, res) => {
    try {
      await Video.findByIdAndRemove(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ error: 'Video not found' });
    }
  },
};

module.exports = videoController;