import express from "express";
import {
  addComment,
  createPost,
  getFriendRecommendations,
  getPost,
  getPosts,
  getUserProfile,
  toggleFollowUser,
  updatePostInteraction,
} from "../controllers/postControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getPosts);
router.get("/post/:username/:postId", getPost);
router.get("/:username", getUserProfile);
router.get("/friends/recommendations", getFriendRecommendations);
router.post("/interact", updatePostInteraction);
router.post("/comment", addComment);
router.post("/create", createPost);
router.post("/follow", toggleFollowUser);

export default router;
