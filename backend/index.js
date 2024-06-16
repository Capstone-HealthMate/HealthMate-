import express from "express";
import cors from "cors";
import "dotenv/config";
import database from "./lib/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";
import likeRouter from "./routes/like.js";
import commentRoutes from "./routes/comment.js";
import articleRoutes from "./routes/article.js";

const app = express();

const port = process.env.PORT || 3000;
const corsOptions = {
  origin: process.env.REACT_URL,
  credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/likes", likeRouter);
app.use("/comments", commentRoutes);
app.use("/articles", articleRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  try {
    await database.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
