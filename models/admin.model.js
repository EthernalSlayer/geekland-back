const db = require("../config/db");

class Admin {
  static create(body, next) {
    db.query("INSERT INTO articles SET ?", [body], next);
  }
}

module.exports = Admin;
