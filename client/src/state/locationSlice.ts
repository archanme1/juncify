import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  coordinates: [number, number] | null; // [lon, lat]
  address: string | null;
  city: string | null;
  region: string | null;
  country: string | null;
  postalCode: string | null;
}

const initialState: LocationState = {
  coordinates: null,
  address: null,
  city: null,
  country: null,
  region: null,
  postalCode: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<{
        coordinates: [number, number];
        address: string | null;
        city: string | null;
        region: string | null;
        country: string | null;
        postalCode: string | null;
      }>
    ) => {
      state.coordinates = action.payload.coordinates;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.region = action.payload.region;
      state.country = action.payload.country;
      state.postalCode = action.payload.postalCode;
    },
    clearLocation: (state) => {
      state.coordinates = null;
      state.address = null;
      state.city = null;
      state.country = null;
      state.region = null;
      state.postalCode = null;
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;
export default locationSlice.reducer;
