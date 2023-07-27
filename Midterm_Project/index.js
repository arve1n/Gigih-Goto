const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const mongoURI = 'mongodb://localhost:27017/toko-play';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const videoRoutes = require('./routes/videoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(videoRoutes);
app.use(commentRoutes);
app.use(productRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});