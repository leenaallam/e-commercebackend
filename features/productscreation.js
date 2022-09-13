//const { Product } = require("../models/products");
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  type: String,
  name: String,
  price: Number,
  category: String,
});
const Product = mongoose.model("products", productsSchema);

//data generation api
const data = [
  {
    name: "headphone",
    category: "Electronics",

    price: 2,
  },
  {
    name: "Mango",
    category: "Food",
    type: "fruit",
    price: 4,
  },
  {
    name: "Banana",
    category: "Food",
    type: "fruit",
    price: 5,
  },
];

// creating products in database
const createproduct = () => {
  data.forEach((product) => {
    let p = new Product(product);
    p.save().then((res) => {
      console.log(res);
    });
  });
};

//fetch data from database to frontend and sort
const fetchProduct = async (sortby) => {
  return await Product.find({}).then((res) => {
    console.log(sortby);
    //if sortby name//
    if (sortby) {
      return res.sort((a, b) =>
        // a of type/price
        {
          return a[sortby] - b[sortby];
        }
      );
    } else {
      return res;
    }
  });
};

module.exports = { createproduct, fetchProduct };
