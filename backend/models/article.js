// article.js
import { DataTypes } from "sequelize";
import database from "../lib/db.js";
import User from "./user.js";

const Article = database.define("Article", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: "CASCADE",
  },
});

Article.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
User.hasMany(Article, { foreignKey: "userId" });

export default Article;
