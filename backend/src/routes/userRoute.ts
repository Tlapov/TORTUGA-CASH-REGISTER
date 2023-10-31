import { Router } from "express";
import { createUser, loginUser, getUser } from "../controllers/userControllers";
import authMiddleware from "../middlewares/auth.middlewares";

const router = Router();

router.post("/api/user/createUser", createUser);
router.post("/api/user/login", loginUser);
router.get("/api/user/getUser", authMiddleware, getUser);

export default router;