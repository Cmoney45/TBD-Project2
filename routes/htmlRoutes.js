const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("index", {
        msg: "Welcome!",
        users: User
      });
    });
  });

  app.get("/adduser", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("adduser", {
        users: User
      });
    });
  });

  app.get("/login", (req, res) => {
    res.render("login");
  });

  // Render the index page for any unmatched routes
  app.get("*", (req, res) => {
    db.User.findAll({}).then(User => {
      res.render("index", {
        msg: "Welcome!",
        users: User
      });
    });
  });
};
