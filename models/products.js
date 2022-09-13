const mongoose = require("mongoose");
//create product
//category food/electronics
//type fruit/vegs
const productsSchema = new mongoose.Schema({
  type: String,
  name: String,
  price: Number,
  catergory: String,
});

const Product = mongoose.model("products", productsSchema);
module.export = { Product };
