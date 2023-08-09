import express from "express";
import { updateCommunity, deleteCommunity, getCommunity, getCommunities, createCommunity } from "../controllers/community.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createCommunity);

// UPDATE
router.put("/:id", verifyAdmin, updateCommunity);

// DELETE
router.delete("/:id", verifyAdmin, deleteCommunity);

// GET
router.get("/find/:id", getCommunity);

// GET ALL
router.get("/", getCommunities);

// // FOLLOW A USER
// router.put("/:id/follow", followCommunity);

// //UNFOLLOW A USER
// router.put("/:id/unfollow", unfollowCommunity);


export default router;