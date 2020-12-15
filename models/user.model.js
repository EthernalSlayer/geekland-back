const db = require("../config/db");

class User {
  static create(body, next) {
    db.query("INSERT INTO users SET ?", [body], next);
  }

  static login(pseudo, next) {
    db.query(
      "SELECT id, pseudo, password FROM users WHERE pseudo = ?",
      [pseudo],
      next
    );
  }
}

module.exports = User;
