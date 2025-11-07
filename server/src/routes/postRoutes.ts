import express from "express";
import {
  getFriendRecommendations,
  getPost,
  getPosts,
  getUserProfile,
  updatePostInteraction,
} from "../controllers/postControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware(["manager", "customer"]), getPosts);
router.get(
  "/post/:username/:postId",
  authMiddleware(["manager", "customer"]),
  getPost
);
router.get(
  "/:username",
  authMiddleware(["manager", "customer"]),
  getUserProfile
);
router.get(
  "/friends/recommendations",
  authMiddleware(["manager", "customer"]),
  getFriendRecommendations
);
router.post(
  "/interact",
  authMiddleware(["manager", "customer"]),
  updatePostInteraction
);

export default router;
