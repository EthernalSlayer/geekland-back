require("dotenv").config();
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;

//multer options
const upload = multer({ dest: "images" });

// Import router
const articles = require("./routes/articles");

// Create the express app
const app = express();

// Middleware
// app.use(/* ... */)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("images"));

// Routers
app.use("/articles", articles);

//upload route
app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send();
});
app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send();
});

// Start server
app.listen(PORT, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`Started at http://localhost:${PORT}`);
});
