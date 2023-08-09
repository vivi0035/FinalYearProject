import express from "express";
import { updateUser, deleteUser, getUser, getUsers, followUser, unfollowUser, getFriends } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET ALL
router.get("/", verifyAdmin, getUsers); //modify here first

// GET
// router.get("/:id", verifyUser, getUser);

router.get("/", getUser); //modify here last

// GET FRIENDS

router.get("/friends/:userId", getFriends);

// FOLLOW A USER
router.put("/:id/follow", followUser);

//UNFOLLOW A USER
router.put("/:id/unfollow", unfollowUser);

export default router;