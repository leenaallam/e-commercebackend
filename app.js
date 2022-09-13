const express = require("express");
const { fetchProduct } = require("./features/productscreation");
require("./mongoconnection.js");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  //   res.send("Hello World!");
});

app.post("/products", async (req, res) => {
  const products = await fetchProduct(req.body.sortby);
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
