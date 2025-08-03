import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEnumString(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

export function formatPriceValue(value: number | null, isMin: boolean) {
  if (value === null || value === 0)
    return isMin ? " Min Install Fee" : " Max Install Fee";
  if (value >= 1000) {
    const kValue = value / 1000;
    return isMin ? `$${kValue}k+` : `<$${kValue}k`;
  }
  return isMin ? `$${value}yrs +` : `<$${value}yrs`;
}
export function formatYearsofExperienceValue(
  value: number | null,
  isMin: boolean
) {
  if (value === null || value === 0)
    return isMin ? "Min Experience" : "Max Experience";
  if (value >= 1000) {
    const kValue = value / 1000;
    return isMin ? `${kValue} yrs` : `<${kValue}yrs`;
  }
  return isMin ? `${value}yrs +` : `<${value}yrs`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanParams(params: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(params).filter(
      (
        [_, value] // eslint-disable-line @typescript-eslint/no-unused-vars
      ) =>
        value !== undefined &&
        value !== "any" &&
        value !== "" &&
        (Array.isArray(value) ? value.some((v) => v !== null) : value !== null)
    )
  );
}

type MutationMessages = {
  success?: string;
  error: string;
};

export const withToast = async <T>(
  mutationFn: Promise<T>,
  messages: Partial<MutationMessages>
) => {
  const { success, error } = messages;

  try {
    const result = await mutationFn;
    if (success) toast.success(success);
    return result;
  } catch (err) {
    if (error) toast.error(error);
    throw err;
  }
};

export const createNewUserInDatabase = async (
  user: any,
  idToken: any,
  userRole: string,
  fetchWithBQ: any
) => {
  const createEndpoint =
    userRole?.toLowerCase() === "manager" ? "/managers" : "/customers";

  const createUserResponse = await fetchWithBQ({
    url: createEndpoint,
    method: "POST",
    body: {
      cognitoId: user.userId,
      name: user.username,
      email: idToken?.payload?.email || "",
      phoneNumber: "",
    },
  });

  if (createUserResponse.error) {
    throw new Error("Failed to create user record");
  }

  return createUserResponse;
};

export interface ReverseGeocodeData {
  address?: string;
  city?: string;
  country?: string;
  region?: string;
  postalCode?: string;
}

export async function reverseGeocode(
  lat: number,
  lon: number
): Promise<ReverseGeocodeData | null> {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

  try {
    const response = await axios.get<{
      features: {
        place_type: string[];
        text: string;
        context?: { id: string; text: string }[];
      }[];
    }>(url);

    const features = response.data.features;

    let city = "";
    let country = "";
    let region = "";
    let postalCode = "";
    let address = "";

    for (const feature of features) {
      // console.log("feature", feature);

      if (feature.place_type.includes("place")) city = feature.text;
      if (feature.place_type.includes("address")) address = feature.text;

      feature.context?.forEach((ctx) => {
        if (ctx.id.startsWith("country")) country = ctx.text;
        if (ctx.id.startsWith("region")) region = ctx.text;
        if (ctx.id.startsWith("postcode")) postalCode = ctx.text;
      });
    }

    return { address, city, country, region, postalCode };
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return null;
  }
}
