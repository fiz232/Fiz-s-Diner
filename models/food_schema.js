const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  description: { type: String },
  price: { type: Number, required: true, min: 0 },
});

const order = mongoose.model("order", foodSchema);
module.exports = order;
