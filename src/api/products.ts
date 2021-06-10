import express, { Request, Response } from "express";
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
  async (req : Request, res : Response) => {
    try {

      const product = await Product.find();

      res.json({
        "staus" : 200,
        "success" : true,
        "message" : "상품 API 불러오기 성공",
        "data" : {
          "Product" : product
        }
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        "staus" : 500,
        "success" : false,
        "message" : "서버 에러"
      });
    }
  }
);

router.get(
  "/Product/Onepiece",
  async (req : Request, res : Response) => {
    try {

      const product = await Product.find({category:"Onepiece"}).select(["price","image","shop","name","discount"]);

      res.json({
        "staus" : 200,
        "success" : true,
        "message" : "상품 API 불러오기 성공",
        "data" : {
          "Product" : product
        }
      })
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        "staus" : 500,
        "success" : false,
        "message" : "서버 에러"
      });
    }
  }
);

module.exports = router;