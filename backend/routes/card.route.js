import express from "express";
import {
    createCard,
    getCards,
    getCardById,
    updateCard,
    refineHeading,
    refineCourseDetails
} from "../controllers/card.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/", protectRoute, createCard);
router.post("/refinehead", protectRoute, refineHeading);
router.post("/refinecarddetails", protectRoute, refineCourseDetails);


router.get("/", getCards);


router.get("/:id", getCardById);


router.put("/:id", protectRoute, updateCard);

export default router;
