const db = require("../config/db");

class Admin {
  static create(body, next) {
    db.query("INSERT INTO articles SET ?", [body], next);
  }

  static update(body, id, next) {
    db.query("UPDATE articles SET ? WHERE id = ?", [body, id], next);
  }
}

module.exports = Admin;
