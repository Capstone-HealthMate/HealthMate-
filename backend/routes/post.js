import express from "express";
import {
  getPosts,
  createPost,
  searchPosts,
  getPostById,
} from "../controllers/post.js";
import authenticateToken from "../middlewares/auth.js";
import postMiddleware from "../middlewares/post.js";

const router = express.Router();

router.get("/", postMiddleware, getPosts);

router.get("/search", searchPosts);

router.get("/:postId", postMiddleware, getPostById);

router.post("/", authenticateToken, createPost);

export default router;
