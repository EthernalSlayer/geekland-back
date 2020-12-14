require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

// Import router
const articles = require("./routes/articles");

// Create the express app
const app = express();

// Middleware
// app.use(/* ... */)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
app.use("/articles", articles);

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
