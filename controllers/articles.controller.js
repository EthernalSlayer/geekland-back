const Articles = require("../models/articles.model");

class ArticlesController {
  static getArticles(req, res) {
    Articles.find((err, results) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        res.status(200).json(results);
      }
    });
  }
}

module.exports = ArticlesController;
