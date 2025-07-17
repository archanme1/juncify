import express from "express";
import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createContractor,
  getContractor,
  getContractors,
} from "../controllers/contractorControllers";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getContractors);
router.get("/:id", getContractor);
router.post(
  "/",
  authMiddleware(["manager"]),
  upload.array("photos"),
  createContractor
);

export default router;
