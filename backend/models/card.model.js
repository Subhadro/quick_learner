import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        username: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /\+?\d{10,15}/.test(v);
                },
                message: (props) => `${props.value} is not a valid phone number!`,
            },
        },
        email: {
            type: String,
            required: true,
        },
        telegram: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        heading: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
        board: {
            type: String,
        },
        topic: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        preferredMode: {
            type: String,
            env: ["Online", "Offline"],
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        payment: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["available", "not-available"],
            required: true,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
    },
    { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);
export default Card;
