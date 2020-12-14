const db = require("../config/db");

class Admin {
  static create(body, next) {
    db.query("INSERT INTO articles SET ?", [body], next);
  }

  static update(body, id, next) {
    db.query("UPDATE articles SET ? WHERE id = ?", [body, id], next);
  }

  static delete(id, next) {
    db.query("DELETE FROM articles WHERE id = ?", [id], next);
  }
}

module.exports = Admin;
