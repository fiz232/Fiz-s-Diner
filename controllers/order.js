const express = require("express");
const router = express.Router();

const order = require("../models/food_schema.js");

router.get("/", (req, res) => {
  order.find({}, (err, orderDetails) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index.ejs", { order: orderDetails, user: req.session.user });
    }
  });
});

router.get("/new", (req, res) => {
  res.render("../views/new.ejs");
});

router.get("/contactUs", (req, res) => {
  res.render("../views/contact_us.ejs");
});

router.get("/:id", (req, res) => {
  order.findById(req.params.id, (err, foundOrder) => {
    if (err) {
      console.log(err);
    } else {
      res.render("show.ejs", { orders: foundOrder, user: req.session.user });
    }
  });
});

router.post("/", (req, res) => {
  order.create(req.body, (err, order) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/order");
    }
  });
});

router.get("/:id/edit", (req, res) => {
  order.findById(req.params.id, (err, foundOrder) => {
    if (err) {
      console.log(err);
    }
    res.render("../views/edit.ejs", { orders: foundOrder });
  });
});

router.put("/:id", (req, res) => {
  order.findByIdAndUpdate(req.params.id, req.body, (err, updatedOrder) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/order");
    }
  });
});

router.delete("/:id", (req, res) => {
  order.findByIdAndDelete(req.params.id, (err, order) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/order");
    }
  });
});

router.get("/seed", (req, res) => {
  order.insertMany(
    [
      {
        name: "Aglio Olio",
        description:
          "Spaghetti with sautéing sliced garlic in olive oil, with the addition of red pepper flakes and anchovies.",
        img: "https://lilluna.com/wp-content/uploads/2020/04/Spaghetti-Aglio-e-Olio-5.jpg",
        price: 14.9,
      },
      {
        name: "Creamy Cabonara",
        description:
          "Classic Italian creamy pasta, cooked with bacon, mushrooms and onions in a cheesy, rich egg yolk mixture.",
        img: "https://therecipecritic.com/wp-content/uploads/2012/07/creamy_bacon_carbonara.jpg",
        price: 17.9,
      },
      {
        name: "Chicken Bolognese Spaghetti",
        description:
          "Aldente whole-wheat spaghetti noodles with chicken thighs slow-cooked in a red wine and vegetable tomato sauce topped with the classic bolognese sauce.",
        img: "https://www.healthylifetrainer.com/wp-content/uploads/2022/01/Chicken-Bolognese-05.jpg",
        price: 15.9,
      },
      {
        name: "Classic Peperoni Pizza",
        description:
          "Hand-kneaded and tossed dough topped with tomato pulp, mozzarella, hot salami, red capsicum, black olives, and goats' cheese.",
        img: "https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg",
        price: 34.9,
      },
      {
        name: "BBQ Chicken Pizza",
        description:
          "Spicy barbecue sauce, diced chicken, peppers, onion, and cilantro, all covered with cheese and baked to bubbly goodness.",
        img: "https://therecipecritic.com/wp-content/uploads/2022/04/bbqchickenpizza-1-2.jpg",
        price: 34.9,
      },
      {
        name: "Pizza Margherita",
        description:
          "Grana padano, cheddar and oozing fresh mozzarella with organic Cameron Highland tomato confit and a fresh basil olive tapenade.",
        img: "https://simplyhomecooked.com/wp-content/uploads/2016/07/margherita-pizza-recipe-6.jpg",
        price: 39.9,
      },
    ],
    (err, success) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/order");
      }
    }
  );
});

module.exports = router;
