import { DataTypes } from "sequelize";
import database from "../lib/db.js";
import User from "./user.js";

const Post = database.define("Post", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tag: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Post, { foreignKey: "userId" });

export default Post;
