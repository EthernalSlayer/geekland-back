const express = require("express");
const router = express.Router();
const ArticlesController = require("../controllers/articles.controller");

router.get("/", ArticlesController.getArticles);

module.exports = router;
