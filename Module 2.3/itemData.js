const mongoose = require('mongoose');

// Define the schema for the itemData
const itemSchema = new mongoose.Schema({
  artist: String,
  songname: String,
  played: Number,
});

// Create and export the model
module.exports = mongoose.model('Item', itemSchema);