const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');
const videoThumbnailRoutes = require('./routes/videoThumbnailRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tokopedia-play', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Use commentRoutes for /comments routes
app.use('/comments', commentRoutes);
app.use('/video', videoThumbnailRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
