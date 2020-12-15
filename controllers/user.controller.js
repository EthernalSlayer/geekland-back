const User = require("../models/user.model");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

class UserController {
  static createAdmin(req, res) {
    const password = md5(req.body.password);
    req.body.password = password;
    User.create(req.body, (err) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        req.body.id = res.insertId;
        res.status(201).json(req.body);
      }
    });
  }

  static loginAdmin(req, res) {
    let pseudo = req.body.pseudo;
    let password = req.body.password;
    let hashPass = md5(password);
    User.login(pseudo, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message, sql: err.sql });
      } else {
        if (results[0] !== undefined) {
          console.log(results[0].password);
          if (results[0].password === hashPass) {
            let data = {
              id: results[0].id,
              pseudo: results[0].pseudo,
            };
            let token = jwt.sign(data, process.env.SECRET);
            res.status(200).json({
              message: "authorized",
              admin: "yes",
              access_token: token,
            });
          } else {
            res.status(401).json({ message: "unauthorized", admin: "no" });
          }
        } else {
          res.status(401).json({ message: "unauthorized", admin: "no" });
        }
      }
    });
  }
}

module.exports = UserController;
