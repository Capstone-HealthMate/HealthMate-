import { DataTypes } from "sequelize";
import database from "../lib/db.js";
import User from "./user.js";
import Post from "./post.js";

const Like = database.define("Like", {
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Like.belongsTo(Post, { foreignKey: "postId", onDelete: "CASCADE" });
Like.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
Post.hasMany(Like, { foreignKey: "postId" });
User.hasMany(Like, { foreignKey: "userId" });

export default Like;
