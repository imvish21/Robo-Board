import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

//To Create New Products - /api/v1/product/new
app.post("/new", singleUpload, newProduct);

//To get all Products with filters - /api/v1/product/all
app.get("/all", getAllProducts);

//To get last 10 products - /api/v1/product/latest
app.get("/latest", getlatestProducts);

//To get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);

//To get all Products - /api/v1/product/admin-products
app.get("/admin-products", getAdminProducts);

//To get, update, delete Product
app
  .route("/:id")
  .get(getSingleProduct)
  .put(singleUpload, updateProduct)
  .delete(deleteProduct);

export default app;
