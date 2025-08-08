import Card from "../models/card.model.js";
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Create a new card
export const createCard = async (req, res, next) => {
    try {
        const newCard = new Card(req.body);
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (error) {
        console.log(error); res.status(500).json(error)
    }
};

// Get all cards
export const getCards = async (req, res, next) => {
    try {
        const cards = await Card.find().populate("user");
        res.status(200).json(cards);
    } catch (error) {
        console.log(error); res.status(500).json(error)
    }
};

// Get a single card by ID
export const getCardById = async (req, res, next) => {
    try {
        const card = await Card.findById(req.params.id).populate("user");
        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }
        res.status(200).json(card);
    } catch (error) {
        console.log(error); res.status(500).json(error)
    }
};

// Update a card by ID
export const updateCard = async (req, res, next) => {
    try {
        const updatedCard = await Card.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedCard) {
            return res.status(404).json({ message: "Card not found" });
        }
        res.status(200).json(updatedCard);
    } catch (error) {
        console.log(error); res.status(500).json(error)
    }
};

export const refineHeading = async (req, res) => {
    try {
        const { heading } = req.body;

        const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
        const prompt = `Generate multiple professional and concise course title options based on the following topic. Return them as a simple list:\n\n"${heading}"`;

        const result = await model.generateContent({
            contents: [{ parts: [{ text: prompt }] }]
        });

        const text = result.response.text().trim();

        // Extract only lines that look like title options (skip explanations)
        const lines = text
            .split("\n")
            .map(line => line.replace(/^\*+\s*/, "").replace(/^\d+[\).]?\s*/, "").trim())
            .filter(line => line.length > 5 && /^[A-Za-z]/.test(line)); // ignore headings or short lines

        // Format them as numbered key-value pairs
        const formatted = {};
        lines.forEach((title, index) => {
            formatted[(index + 1).toString()] = title;
        });

        res.json({ refinedHeadings: formatted });
    } catch (err) {
        console.error("Error refining heading:", err);
        res.status(500).json({ error: "Failed to refine heading" });
    }
};

export const refineCourseDetails = async (req, res) => {
    try {
        const { details } = req.body;

        const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
        const prompt = `Please professionally format the following course details into a clean, structured course summary with clear section titles and bullet points where appropriate. Keep it suitable for a general audience (not always university):

${details}

Output should be organized with proper headings, use consistent formatting, and ensure clarity.`;

        const result = await model.generateContent({
            contents: [{ parts: [{ text: prompt }] }]
        });

        const formatted = result.response.text().trim();
        res.json({ refinedDetails: formatted });
    } catch (err) {
        console.error("Error refining course details:", err);
        res.status(500).json({ error: "Failed to refine course details" });
    }
};
