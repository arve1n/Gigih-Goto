const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const itemRoute = require('./route/items')

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gigih-playlist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());

app.use("/items", itemRoute)

app.get("/", (req, res) => {
  res.send("Hello spotify!");
});

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
