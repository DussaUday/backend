import express from "express";
import { createPost, getPosts, likePost, commentPost, deletePost, getCurrentUserPosts } from "../controllers/post.controller.js";
import protectRoute from "../middleware/protectRoute.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/create", upload.single("media"), createPost);
router.get("/getPosts", getPosts);
router.post("/like/:postId", likePost);
router.post("/comment/:postId", commentPost);
router.delete("/delete/:postId", deletePost);
router.get("/current-user", getCurrentUserPosts);

export default router;
