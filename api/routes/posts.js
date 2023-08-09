import express from "express";
import { createPost, deletePost, getPost, getPosts, likePost, updatePost, getUserPosts } from "../controllers/post.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", createPost);

// UPDATE
router.put("/:id", updatePost);

// DELETE
router.delete("/:id", deletePost);

// GET
router.get("/:id", getPost);

// GET ALL
router.get("/timeline/:userId", getPosts);

//GET USER'S ALL POSTS
router.get("/profile/:username", getUserPosts);

// LIKE / DISLIKE A POST
router.put("/:id/like", likePost);


export default router;