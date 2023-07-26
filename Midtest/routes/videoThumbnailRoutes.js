const express = require('express');
const router = express.Router();
const videoThumbnailController = require('../controllers/videoThumbnailController');

// Route to get all video thumbnails and show urlImageThumbnail
router.get('/', videoThumbnailController.getAllVideoThumbnails);

// Route to get the detail of a specific video by VideoID
router.get('/:id', videoThumbnailController.getVideoThumbnailById);

// Route to create a new video thumbnail
router.post('/', videoThumbnailController.createVideoThumbnail);

// Route to update a video thumbnail by VideoID
router.put('/:id', videoThumbnailController.updateVideoThumbnailById);

// Route to delete a video thumbnail by VideoID
router.delete('/:id', videoThumbnailController.deleteVideoThumbnailById);

module.exports = router;