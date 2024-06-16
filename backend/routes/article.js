import express from 'express';
import { upload, createArticle, getArticles, getArticlesByUser, getArticleById, updateArticle, deleteArticle } from '../controllers/article.js';
import authenticateToken from '../middlewares/auth.js';


const router = express.Router();

router.post('/', authenticateToken, upload.single('image'), createArticle); 
router.get('/', getArticles); 
router.get('/user', authenticateToken, getArticlesByUser); 
router.get('/:id', getArticleById); 
router.put('/:id', authenticateToken, upload.single('image'), updateArticle); 
router.delete('/:id', authenticateToken, deleteArticle); 

export default router;
