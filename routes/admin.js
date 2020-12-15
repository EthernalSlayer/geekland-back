const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

router
  .post("/", AdminController.postArticle)
  .put("/:id", AdminController.putArticle)
  .delete("/:id", AdminController.deleteArticle);

module.exports = router;
