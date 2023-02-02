const express = require("express");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const session = require("express-session");
app.use(
  session({
    secret: "amazingrestaurant",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  next();
});

const mongoose = require("mongoose");
mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`;
mongoose.set("strictQuery", true);
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error: ")
);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB " + process.env.MONGO_DBNAME);
});
mongoose.connection.on("disconnected", () => {
  console.log(
    "Successfully disconnected to MongoDB " + process.env.MONGO_DBNAME
  );
});

const PORT = process.env.PORT || 3000;

const orderController = require("./controllers/order.js");

const loginController = require("./controllers/login_controller.js");
const signupController = require("./controllers/signup_controller.js");

const cartController = require("./controllers/cart_controller.js");

app.use("/order", orderController);
app.use("/login", loginController);
app.use("/signup", signupController);
app.use("/cart", cartController);

app.get("/", (req, res) => {
  res.redirect("/order");
});

app.listen(PORT, () => {
  console.log("application running on port: " + PORT);
});
