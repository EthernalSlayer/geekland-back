const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

class AdminController {
  static postArticle(req, res) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader;
      jwt.verify(token, process.env.SECRET, (err) => {
        if (err) {
          res.sendStatus(403);
        } else {
          Admin.create(req.body, (err) => {
            if (err) {
              res.status(500).json({ error: err.message, sql: err.sql });
            } else {
              req.body.id = res.insertId;
              res.status(201).json(req.body);
            }
          });
        }
      });
    } else {
      res.sendStatus(401);
    }
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

  static deleteArticle(req, res) {
    Admin.delete(req.params.id, (err) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        res
          .status(200)
          .json({ message: `article ${req.params.id} a été supprimer` });
      }
    });
  }
}

module.exports = AdminController;
