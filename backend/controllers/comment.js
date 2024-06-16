import Comment from "../models/comment.js";
import Post from "../models/post.js";
import User from "../models/user.js";

const createComment = async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = await Comment.create({
      userId: req.user.id,
      postId: postId,
      content: content,
    });

    const commentWithUser = await Comment.findByPk(comment.id, {
      include: {
        model: User,
        attributes: ["username"],
      },
    });

    res
      .status(201)
      .json({
        message: "Comment created successfully",
        comment: commentWithUser,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.findAll({
      where: { postId },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createComment, getCommentsByPost };
