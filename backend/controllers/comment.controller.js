import mongoose from 'mongoose';
import Comment from '../models/comments.model.js';
import Card from '../models/card.model.js';

// Add a comment to a card
export const createComment = async (req, res) => {
    try {
        const { userId, cardId, username, content } = req.body;

        if (!userId || !cardId || !username || !content) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newComment = new Comment({ userId, cardId, username, content });
        const savedComment = await newComment.save();

        // Push comment ID into Card's comments array
        await Card.findByIdAndUpdate(cardId, {
            $push: { comments: savedComment._id },
        });

        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment', error });
    }
};

// Get all comments for a card
export const getCommentsByCard = async (req, res) => {
    try {
        const { cardId } = req.params;

        const comments = await Comment.find({ cardId }).sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch comments', error });
    }
};

// Delete comment and remove from card
export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findById(commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        // Remove from Card
        await Card.findByIdAndUpdate(comment.cardId, {
            $pull: { comments: commentId },
        });

        await Comment.findByIdAndDelete(commentId);

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete comment', error });
    }
};
