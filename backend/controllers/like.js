import Like from "../models/like.js";
import Post from "../models/post.js";

const likePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const like = await Like.findOne({
      where: {
        userId: req.user.id,
        postId: postId,
      },
    });

    if (like) {
      return res
        .status(400)
        .json({ message: "You have already liked this post" });
    }

    const newLike = await Like.create({
      userId: req.user.id,
      postId: postId,
    });

    res.status(201).json({ message: "Post liked successfully", like: newLike });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { likePost };
