import * as TeacherController from "../controllers/TeacherController.js"
import express from "express";

const router=express.Router()

router.route("/add").post(TeacherController.createTeacher)
router.route("/getAllTeacher").get(TeacherController.getAllTeacher)
router.route("/update:id").put(TeacherController.updateTeacher)
router.route("/delete:id").delete(TeacherController.deleteTeacher)

export default router;