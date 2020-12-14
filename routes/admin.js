const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

router
  .post("/", AdminController.postArticle)
  .put("/:id", AdminController.putArticle);

module.exports = router;
