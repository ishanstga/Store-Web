import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  categoryId: { type: String, required: true },
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Product", ProductSchema);
