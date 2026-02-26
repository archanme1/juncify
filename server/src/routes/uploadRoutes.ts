import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getPresignedUrls } from "../controllers/uploadControllers";

const router = express.Router();

router.post("/presigned-url", authMiddleware(["manager"]), getPresignedUrls);

export default router;
