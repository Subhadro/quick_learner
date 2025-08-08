import express from "express";
import {
    createReview,
    generateAIReview,
    getReviewById,
    updateReview
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", createReview);



router.get("/:id", getReviewById);

router.post("/generate-review", generateAIReview);
router.put("/:id", updateReview);


export default router;
