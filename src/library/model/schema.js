import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  color: String,
  company: String,
  price: String,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productModel);
