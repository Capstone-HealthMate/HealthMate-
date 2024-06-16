import { DataTypes } from "sequelize";
import database from "../lib/db.js";
import User from "./user.js";
import Post from "./post.js";

const Comment = database.define("Comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Comment.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
Post.hasMany(Comment, { foreignKey: "postId" });
User.hasMany(Comment, { foreignKey: "userId" });

export default Comment;
