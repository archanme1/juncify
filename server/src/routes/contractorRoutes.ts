import express from "express";
// import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createContractor,
  getContractor,
  getContractorBookings,
  getContractors,
  removeManagedContractor,
} from "../controllers/contractorControllers";

// REPLACING WITH AWWS PRESIGNED URL 
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getContractors);
router.get("/:id", getContractor);
router.get("/:id/bookings", getContractorBookings);

router.post(
  "/",
  authMiddleware(["manager"]),
  // upload.array("photos"),
  createContractor
);
router.delete(
  "/:contractorId/managers/:cognitoId",
  authMiddleware(["manager"]),
  removeManagedContractor
);

export default router;
