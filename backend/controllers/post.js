import Post from "../models/post.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";
import Like from "../models/like.js";
import database from "../lib/db.js";
import { Op } from "sequelize";

const createPost = async (req, res) => {
  const { content, tag } = req.body;

  try {
    const post = await Post.create({
      userId: req.user.id,
      content: content,
      tag: tag,
    });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: [],
        },
        {
          model: Like,
          attributes: [],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
      attributes: {
        include: [
          [
            database.literal(`(
                SELECT COUNT(*)
                FROM Comments AS comment
                WHERE comment.postId = Post.id
            )`),
            "commentCount",
          ],
          [
            database.literal(`(
              SELECT COUNT(*)
              FROM Likes AS \`like\`
              WHERE \`like\`.postId = Post.id
          )`),
            "likeCount",
          ],
          [
            database.literal(
              `EXISTS(SELECT 1 FROM Likes WHERE Likes.postId = Post.id AND Likes.userId = ${
                req.user ? req.user.id : 0
              })`
            ),
            "isLikedByCurrentUser",
          ],
        ],
      },
      group: ["Post.id", "User.id"],
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchPosts = async (req, res) => {
  const searchTerm = req.query.content;
  const tag = req.query.tag;

  if (!searchTerm && !tag) {
    return res.status(400).json({ message: "Please provide a search term" });
  }

  const whereClause = {};

  if (searchTerm) {
    whereClause.content = {
      [Op.like]: `%${searchTerm}%`,
    };
  }

  if (tag) {
    whereClause.tag = tag;
  }

  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: [],
        },
        {
          model: Like,
          attributes: [],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
      attributes: {
        include: [
          [
            database.literal(`(
                SELECT COUNT(*)
                FROM Comments AS comment
                WHERE comment.postId = Post.id
            )`),
            "commentCount",
          ],
          [
            database.literal(`(
              SELECT COUNT(*)
              FROM Likes AS \`like\`
              WHERE \`like\`.postId = Post.id
          )`),
            "likeCount",
          ],
          [
            database.literal(
              `EXISTS(SELECT 1 FROM Likes WHERE Likes.postId = Post.id AND Likes.userId = ${
                req.user ? req.user.id : 0
              })`
            ),
            "isLikedByCurrentUser",
          ],
        ],
      },
      group: ["Post.id", "User.id"],
      where: whereClause,
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findByPk(postId, {
      include: [
        {
          model: Comment,
          attributes: [],
        },
        {
          model: Like,
          attributes: [],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
      attributes: {
        include: [
          [
            database.literal(`(
                SELECT COUNT(*)
                FROM Comments AS comment
                WHERE comment.postId = Post.id
            )`),
            "commentCount",
          ],
          [
            database.literal(`(
              SELECT COUNT(*)
              FROM Likes AS \`like\`
              WHERE \`like\`.postId = Post.id
          )`),
            "likeCount",
          ],
          [
            database.literal(
              `EXISTS(SELECT 1 FROM Likes WHERE Likes.postId = Post.id AND Likes.userId = ${
                req.user ? req.user.id : 0
              })`
            ),
            "isLikedByCurrentUser",
          ],
        ],
      },
      group: ["Post.id", "User.id"],
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createPost, getPosts, searchPosts, getPostById };
