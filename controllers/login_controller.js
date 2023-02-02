const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const login = require("../models/signup_model.js");

router.get("/new", (req, res) => {
  res.render("../views/sign_in_sign_up/login.ejs");
});

router.post("/", (req, res) => {
  login.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (bcrypt.compareSync(req.body.password, foundUser.password)) {
          req.session.user = foundUser;
          res.redirect("/order");
        } else {
          res.send("Invalid Username or Password");
        }
      }
    }
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/order");
  });
});

module.exports = router;
