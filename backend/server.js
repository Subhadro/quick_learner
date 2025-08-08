import express from 'express';
import authRoutes from "./routes/auth.route.js"
import commentRoutes from "./routes/comment.route.js"
import messageRoutes from "./routes/message.route.js"
import cardRoutes from "./routes/card.route.js"
import reviewSection from "./routes/review.route.js";
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import cookieParser from "cookie-parser"
import cors from "cors";
const app = express();


dotenv.config();
connectDB();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/card", cardRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/review", reviewSection);
app.use("/api/comment", commentRoutes);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("server listening on port ", PORT);
})