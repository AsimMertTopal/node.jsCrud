import * as ProductController from "../controllers/ProductController.js";
import express from "express";

const router = express.Router();

router.route("/add").post(ProductController.createProduct);
router.route("/update:id").put(ProductController.updateProduct);
router.route("/delete:id").delete(ProductController.deleteProduct);
router.route("/getAll").get(ProductController.getAllProduct);

export default router;