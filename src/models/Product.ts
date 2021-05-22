import mongoose from "mongoose";
import { IProduct } from "../interfaces/IProduct";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  discount: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  shop: {
    type: String,
    required: true,
  },
  review_count: {
    type: Number,
    required: true,
  },
  satisfy: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IProduct & mongoose.Document>("User", ProductSchema);