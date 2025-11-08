import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  getBookingPayments,
  getBookings,
} from "../controllers/bookingControllers";

const router = express.Router();

router.get("/", getBookings);
router.get(
  "/:id/payments",

  getBookingPayments
);

export default router;
