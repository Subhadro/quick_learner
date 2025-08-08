import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

// User Signup
export const signup = async (req, res) => {
    const { fullName, email, password, category, username } = req.body;

    // Check required fields
    if (!fullName || !email || !password || !category || !username) {
        return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create New User
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        })

        // Save user to database
        await newUser.save();

        // Generate JWT Token
        generateToken(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            username: newUser.username,
            category: newUser.category,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.error("Error in signup:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Login
export const login = async (req, res) => {
    const { email, password } = req.body;

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials at password checking" });
        }

        // Generate JWT Token
        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            category: user.category,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error("Error in login:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Logout
export const logout = (req, res) => {
    try {
        // Check if the JWT cookie exists
        if (!req.cookies || !req.cookies.jwt) {
            return res.status(404).json({ message: "No active session found" });
        }

        // Clear the cookie
        res.cookie("jwt", "", { maxAge: 0, httpOnly: true, secure: true });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logout:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
// Update Profile Picture
export const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;

        // Check if profile picture is provided
        if (!profilePic) {
            return res.status(400).json({ message: "Profile picture is required" });
        }

        // Upload to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { profilePic: uploadResponse.secure_url },
            { new: true }
        );

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error in updateProfile:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Check User Authentication (for session persistence)
export const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.error("Error in checkAuth:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
