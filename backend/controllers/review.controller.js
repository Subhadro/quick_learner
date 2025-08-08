import Review from "../models/review.model.js";
import User from "../models/user.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const createReview = async (req, res, next) => {
    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        const receiverId = req.body.receiverId;
        await User.findByIdAndUpdate(receiverId, { $push: { review: savedReview } });
        res.status(201).json(savedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "error in backend in review controller" });
    }
};

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await Review.find({ teacher: req.params.teacherId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: "error in backend in review controller" });
    }
};


export const getReviewById = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id).populate("student", "name email");
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ error: "error in backend in review controller" });
    }
};


export const updateReview = async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        const user = await User.findById(updatedReview.receiverId);
        if (!updatedReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        const reviewIndex = user.review.findIndex(r => r._id.toString() === updatedReview._id.toString());

        if (reviewIndex === -1) {
            return res.status(404).json({ message: "Review not found in user's reviews" });
        }

        user.review[reviewIndex] = updatedReview;
        await user.save();

        res.status(200).json({ updatedReview });
    } catch (error) {
        res.status(500).json({ error: "error in backend in review controller" });
    }
};

// ---------------------------
// Generate AI Review (Gemini)
// ---------------------------
export const generateAIReview = async (req, res) => {
    const { senderRole, receiverRole, receiverName, customDetails, rating } = req.body;

    const prompt = `Write multiple short, polite, and specific ${senderRole}-to-${receiverRole} reviews for a person named ${receiverName}, based on the following details:
- Rating: ${rating} stars
- Notes: ${customDetails}

Each review should start with "Review 1:", "Review 2:", etc. Avoid markdown formatting. Keep tone professional and reviews unique.`;

    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
        const result = await model.generateContent({
            contents: [{ parts: [{ text: prompt }] }]
        });

        const text = await result.response.text();

        // Extract each review using regex
        const matches = text.match(/Review\s*\d+:\s*[\s\S]*?(?=Review\s*\d+:|$)/gi);

        if (!matches || matches.length === 0) {
            return res.status(500).json({ error: "No reviews extracted from the AI response." });
        }

        // Format as object with numeric keys
        const suggestions = {};
        matches.forEach((review, index) => {
            suggestions[(index + 1).toString()] = review.replace(/^\s*Review\s*\d+:\s*/i, "").trim();
        });

        res.json({ suggestions });
    } catch (err) {
        console.error("Error generating review:", err);
        res.status(500).json({ error: "Failed to generate review suggestions" });
    }
};

