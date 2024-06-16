import express from "express";
import { likePost } from "../controllers/like.js";
import authenticateToken from "../middlewares/auth.js";

const router = express.Router();

router.post("/:postId", authenticateToken, likePost);

export default router;
