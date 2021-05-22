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
      res.json('success');
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


module.exports = router;