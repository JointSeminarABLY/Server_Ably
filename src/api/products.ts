import express from "express";
import config from "../config";

const router = express.Router();

import Product from "../models/Product";

router.post(
  "/newProduct",
  async (req, res) => {
    
    const { name, image, discount, price, shop,review_count, satisfy, category } = req.body;

    try {

      let product = new Product({
        name, image, discount, price, shop,review_count, satisfy, category 
      });

      await product.save();
      res.json(product);
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get(
  "/Product",
  async (req, res) => {
    try {

      const product = await Product.find

      res.json(product);
      console.log(res.json(product))
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


module.exports = router;