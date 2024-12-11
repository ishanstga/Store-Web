import express from "express";
import { productRouter } from "./api/product.js";
import { categoryRouter } from "./api/category.js";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware.js";
import { connectDB } from "./insfastructure/db.js";

const app = express();
app.use(express.json()); // For parsing JSON requests

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use(globalErrorHandlingMiddleware);

connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`));
