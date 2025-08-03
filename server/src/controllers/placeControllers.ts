import { Request, Response } from "express";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client({});

export const getPlaceAutocomplete = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const { input } = req.query;

    // if (!input || typeof input !== "string") {
    //   res.status(400).json({ error: "Input parameter is required" });
    //   return;
    // }

    // const response = await client.placeAutocomplete({
    //   params: {
    //     input,
    //     key: process.env.GOOGLE_MAPS_API_KEY!,
    //     types: "address" as any,
    //   },
    // });

    // res.status(200).json(response.data.predictions || []);
    res.status(200).json("JUST ON TEST MODE");
  } catch (error) {
    console.error("Error in place autocomplete:", error);
    res.status(500).json({ error: "Failed to fetch place autocomplete" });
  }
};

export const getPlaceDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const { place_id } = req.query;

    // if (!place_id || typeof place_id !== "string") {
    //   res.status(400).json({ error: "Place ID is required" });
    //   return;
    // }

    // const response = await client.placeDetails({
    //   params: {
    //     place_id,
    //     key: process.env.GOOGLE_MAPS_API_KEY!,
    //     fields: ["address_component", "formatted_address"],
    //   },
    // });

    // res.status(200).json(response.data.result);
    res.status(200).json("JUST ON TEST MODE");
  } catch (error) {
    console.error("Error in place details:", error);
    res.status(500).json({ error: "Failed to fetch place details" });
  }
};
