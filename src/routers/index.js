import {Router} from "express";
import studentRouter from "./students.routers";
import authRouter from "./auth.routers";
const router=Router();

router.use("/student",studentRouter);
router.use("/auth",authRouter);

export default router