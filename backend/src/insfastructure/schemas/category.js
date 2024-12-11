import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

export default mongoose.model("categories", CategorySchema);
