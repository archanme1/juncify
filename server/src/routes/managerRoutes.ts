import express from "express";
import {
  createManager,
  getManager,
  getManagerContractors,
  updateManager,
} from "../controllers/managerControllers";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.get("/:cognitoId/contractors", getManagerContractors);
router.post("/", createManager);

export default router;
