import express from "express";
import { createWorkshop, deleteWorkshop, getWorkshop, getWorkshops, updateWorkshop } from "../controllers/workshop.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createWorkshop);
//UPDATE
router.put("/:id", verifyAdmin, updateWorkshop);

//DELETE
router.delete("/:id", verifyAdmin, deleteWorkshop);

//GET
router.get("/find/:id", getWorkshop);

//GET ALL
router.get("/", getWorkshops);

export default router;