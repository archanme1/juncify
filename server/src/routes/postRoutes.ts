import express from "express";
import { getPosts, getUserProfile } from "../controllers/postControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware(["manager", "customer"]), getPosts);
router.get(
  "/:username",
  authMiddleware(["manager", "customer"]),
  getUserProfile
);

export default router;
