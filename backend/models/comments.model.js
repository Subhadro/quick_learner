import mongoose, { mongo } from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        cardId: {
            type: mongoose.Schema.Types.ObjectId,// or mongoose.Schema.Types.ObjectId if referencing another collection
            ref: 'Card',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
            maxlength: 1000,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
