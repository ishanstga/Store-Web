import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const ConnectionString = process.env.MONGO_URI;
    await mongoose.connect(ConnectionString);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
    console.log("Can't connect to MongoDB");
  }
};
