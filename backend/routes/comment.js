import express from "express";
import { getCommentsByPost, createComment } from "../controllers/comment.js";
import authenticateToken from "../middlewares/auth.js";

const router = express.Router();

router.post("/:postId", authenticateToken, createComment);

router.get("/:postId", getCommentsByPost);

export default router;
