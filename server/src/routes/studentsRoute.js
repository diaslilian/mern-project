import express from "express";
const router = express.Router();

import controller from "../controllers/studentsController";

router.post("/", controller.createStudents);
router.get("/", controller.findAllStudents);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.removeStudent);

export default router;
