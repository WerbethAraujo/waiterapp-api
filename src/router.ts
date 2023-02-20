import path from "node:path";

import { Router } from "express";

import multer from "multer";

import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProduct } from "./app/useCases/product/createProduct";
import { listProducts } from "./app/useCases/product/listProducts";
import { listProductsByCategory } from "./app/useCases/categories/listProductByCategory";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createOrder } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { deleteOrder } from "./app/useCases/orders/deleteOrder";

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
routes.get("/orders", listOrders);

//Create orders
routes.post("/orders", createOrder);

//Change order status
routes.patch("/orders/:orderId", changeOrderStatus);

//Delete / cancel order
routes.delete("/orders/:orderId", deleteOrder);
