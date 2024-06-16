// sync.js
import database from "./db.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";
import Post from "../models/post.js";
import Like from "../models/like.js";
import Article from "../models/article.js";

database.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});
