const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const signup = require("../models/signup_model.js");

router.get("/new", (req, res) => {
  res.render("../views/sign_in_sign_up/signup.ejs");
});

router.post("/", (req, res) => {
  const randomSaltSync = Math.floor(Math.random() * 10) + 1;
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(randomSaltSync)
  );
  signup.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully Created User: " + createdUser.username);
      res.redirect("/order");
    }
  });
});

module.exports = router;
