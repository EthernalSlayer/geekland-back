const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router
  .post("/", UserController.createAdmin)
  .post("/login", UserController.loginAdmin);

module.exports = router;
