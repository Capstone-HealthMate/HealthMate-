import multer from "multer";
import path from "path";
import Article from "../models/article.js";
import User from "../models/user.js";
import express from "express";

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.json({ message: 'File uploaded successfully' });
});

// Create a new article
const createArticle = async (req, res) => {
  const { title, content, category } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const article = await Article.create({
      title,
      content,
      image,
      category,
      userId: req.user.id,
    });
    res.status(201).json({ message: "Article created successfully", article });
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    res.status(200).json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get articles by user
const getArticlesByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const articles = await Article.findAll({ where: { userId } });
    res.json(articles);
  } catch (error) {
    console.error("Error fetching user's articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get article by ID
const getArticleById = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(400).json({ error: error.message });
  }
};

// Update an article
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, category } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    article.title = title;
    article.content = content;
    article.category = category;
    if (image) {
      article.image = image;
    }

    await article.save();
    res.status(200).json({ message: "Article updated successfully", article });
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(400).json({ error: error.message });
  }
};

// Delete an article
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    await article.destroy();
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(400).json({ error: error.message });
  }
};

export {
  upload,
  createArticle,
  getArticles,
  getArticlesByUser,
  getArticleById,
  updateArticle,
  deleteArticle,
};
