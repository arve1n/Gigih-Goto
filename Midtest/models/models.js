const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tokopedia-play', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for Video Thumbnail List
const videoThumbnailSchema = new mongoose.Schema({
  VideoID: String,
  UrlImageThumbnail: String,
});

// Define the schema for Product List
const productSchema = new mongoose.Schema({
  ProductID: String,
  LinkProduct: String,
  Title: String,
  Price: Number,
});

// Define the schema for Comment List
const commentSchema = new mongoose.Schema({
  Username: String,
  Comment: String,
  Timestamp: { type: Date, default: Date.now },
});

// Create the models for the respective collections
const VideoThumbnail = mongoose.model('VideoThumbnail', videoThumbnailSchema);
const Product = mongoose.model('Product', productSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
  VideoThumbnail,
  Product,
  Comment,
};