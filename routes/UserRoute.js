import express from "express";
import * as UserController from "../controllers/UserController.js";

const router = express.Router();

router.route("/add").post(UserController.createUser);
router.route("/getAll").get(UserController.getAllUser);
router.route("/update:id").put(UserController.updateUser);
router.route("/delete:id").delete(UserController.deleteUser);
export default router;