const Admin = require("../models/admin.model");

class AdminController {
  static postArticle(req, res) {
    Admin.create(req.body, (err) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        req.body.id = res.insertId;
        res.status(201).json(req.body);
      }
    });
  }

  static putArticle(req, res) {
    Admin.update(req.body, req.params.id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        req.body.id = req.params.id;
        res.status(200).json(req.body);
      }
    });
  }
}

module.exports = AdminController;
