import path from "node:path";

import { Router } from "express";

import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/product/createProduct";
import { listProducts } from "./app/useCases/product/listProducts";
import { listProductsByCategory } from "./app/useCases/categories/listProductByCategory";

export const routes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
routes.get("/categories", listCategories);

//Create category
routes.post("/categories", createCategory);

// List products
routes.get("/products", listProducts);

//Create product
routes.post("/products", upload.single("image"), createProduct);

//Get products by category
routes.get("/categories/:categoryId/products", listProductsByCategory);

//List orders
routes.get("/orders", (req, res) => {
  res.send("Ok");
});

//Create orders
routes.post("/orders", (req, res) => {
  res.send("Ok");
});

//Change order status
routes.patch("/orders/:orderId", (req, res) => {
  res.send("Ok");
});

//Delete / cancel order
routes.delete("/orders/:orderId", (req, res) => {
  res.send("Ok");
});
