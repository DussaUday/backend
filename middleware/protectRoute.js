import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

app.use(express.json()); 

const protectRoute = async (req, res, next) => {
    try {
        // Check if token exists
        
        

        // Verify token
        let decoded;
        try {
            decoded = jwt.verify( process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ error: "Unauthorized - Invalid or Expired Token" });
        }

        // Find user by ID from token payload
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;
