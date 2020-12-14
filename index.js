require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

// Create the express app
const app = express();

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
