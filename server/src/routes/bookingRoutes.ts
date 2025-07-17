import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  getBookingPayments,
  getBookings,
} from "../controllers/bookingControllers";

const router = express.Router();

router.get("/", authMiddleware(["manager", "customer"]), getBookings);
router.get(
  "/:id/payments",
  authMiddleware(["manager", "customer"]),
  getBookingPayments
);

export default router;
