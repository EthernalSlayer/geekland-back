const db = require("../config/db");

class Articles {
  static find(next) {
    db.query(
      "SELECT id, title, description, plateforme, rate, good_point, bad_point, date, image FROM articles;",
      next
    );
  }
}

module.exports = Articles;
