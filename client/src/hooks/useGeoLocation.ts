"use client";

import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/state/locationSlice"; // adjust path
import { reverseGeocode } from "@/lib/utils";
import { setFilters } from "@/state";
import { RootState } from "@/state/redux";

export function useGeoLocation() {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.location);
  const filters = useSelector((state: RootState) => state.global);

  const shouldFetch = !location.city || !location.coordinates?.length;

  const fetchLocation = useCallback(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const coordinates: [number, number] = [lon, lat];

        const geoData = await reverseGeocode(lat, lon);

        dispatch(
          setLocation({
            coordinates,
            address: geoData?.address || null,
            city: geoData?.city || null,
            country: geoData?.country || null,
            region: geoData?.region || null,
            postalCode: geoData?.postalCode || null,
          })
        );
        dispatch(
          setFilters({
            coordinates,
            location: geoData?.city ?? "",
          })
        );
      },
      (error) => {
        console.error("Geolocation error:", error.message);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (shouldFetch) {
      fetchLocation();
    }
  }, [fetchLocation, shouldFetch]);

  return { location, filters };
}
