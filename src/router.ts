import { Router } from "express";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategories } from "./app/useCases/categories/listCategories";

export const routes = Router();

// List categories
routes.get("/categories", listCategories);

//Create category
routes.post("/categories", createCategory);

// List products
routes.get("/products", (req, res) => {
  res.send("Ok");
});

//Create product
routes.post("/products", (req, res) => {
  res.send("Create Ok");
});

//Get products by category
routes.get("/categories/:categoryId/products", (req, res) => {
  res.send("Ok");
});

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
