import { Router } from "express";
import StudentController from "../controllers/StudentController";

const router= Router();

router.get("/getmirindi",StudentController.getmirindi);

export default router