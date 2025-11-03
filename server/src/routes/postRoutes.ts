import express from "express";
import { getPosts } from "../controllers/postControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware(["manager", "customer"]), getPosts);

export default router;
