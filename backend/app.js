const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const imageDetectionRoutes = require("./routes/ai-tool/image-detection");
const uploadImageRoutes = require("./routes/upload-image");

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
// app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
const MONGODB_URL = process.env.MONGODB_URL;

app.use("/api/ai-tool/image-detect", imageDetectionRoutes);
app.use("/api/upload-image", uploadImageRoutes);


mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('Connected MongoDB');
    app.listen(process.env.PORT || 3000, function() {
      console.log('server running on port 3000', '');
  });
  })
  .catch(err => {
    console.log(err);
  });