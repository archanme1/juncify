import express from "express";
import {
  addFavoriteContractor,
  createCustomer,
  getCustomer,
  getServiceRecords,
  removeFavoriteContractor,
  updateCustomer,
} from "../controllers/customerControllers";

const router = express.Router();

router.get("/:cognitoId", getCustomer);
router.put("/:cognitoId", updateCustomer);
router.post("/", createCustomer);
router.get("/:cognitoId/service-records", getServiceRecords);
router.post("/:cognitoId/favorites/:contractorId", addFavoriteContractor);
router.delete("/:cognitoId/favorites/:contractorId", removeFavoriteContractor);

export default router;
