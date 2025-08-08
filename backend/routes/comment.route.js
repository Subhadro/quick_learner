import express from 'express';
import { createComment, deleteComment, getCommentsByCard } from '../controllers/comment.controller.js';

const router = express.Router();

// Add comment to a card
router.post('/', createComment);

// Get comments for a specific card
router.get('/:cardId', getCommentsByCard);

// Delete comment by ID
router.delete('/:commentId', deleteComment);

export default router;
