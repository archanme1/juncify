import express from "express";
import {
  getPlaceAutocomplete,
  getPlaceDetails,
} from "../controllers/placeControllers";

const router = express.Router();

// FOR GOOGLE DEVELOPER API
router.get("/autocomplete", getPlaceAutocomplete);
router.get("/details", getPlaceDetails);

export default router;
