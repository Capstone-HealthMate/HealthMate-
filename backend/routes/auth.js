// routes/authRoutes.js
import express from "express";
import { getUser, login, register} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getUser);

export default router;
