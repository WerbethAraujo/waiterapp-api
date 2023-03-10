import path from "node:path";

import express from "express";
import mongoose from "mongoose";
import { routes } from "./router";

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(routes);

    app.listen(3001, () => {
      console.log("🚀 Server running on http://localhost:3001");
    });

    console.log("👍 Connected to database");
  })
  .catch(() => console.log("😒 Error connecting to database"));
