"use client";

import { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface LocationSuggestion {
  description: string;
  place_id: string;
}

interface LocationAutocompleteProps {
  onSelect: (details: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  }) => void;
}

export const LocationAutocomplete = ({
  onSelect,
}: LocationAutocompleteProps) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (input.length < 3) {
        setSuggestions([]);
        setHasSearched(false);
        return;
      }

      setLoading(true);
      setHasSearched(true);

      try {
        const response = await fetch(
          `/api/places/autocomplete?input=${encodeURIComponent(input)}`
        );
        const data = await response.json();
        setSuggestions(data || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [input]);

  const handleSelect = async (suggestion: LocationSuggestion) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/places/details?place_id=${suggestion.place_id}`
      );
      const details = await response.json();

      const addressComponents = details.address_components || [];

      const getComponent = (types: string[]) => {
        const component = addressComponents.find((c: any) =>
          types.some((type) => c.types.includes(type))
        );
        return component?.long_name || "";
      };

      const addressData = {
        fullAddress: details.formatted_address || "",
        address: [getComponent(["street_number"]), getComponent(["route"])]
          .filter(Boolean)
          .join(" "),
        city: getComponent(["locality", "postal_town"]),
        state: getComponent(["administrative_area_level_1"]),
        postalCode: getComponent(["postal_code"]),
        country: getComponent(["country"]),
      };

      onSelect(addressData);
      setInput(details.formatted_address);
    } catch (error) {
      console.error("Error fetching place details:", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="relative">
      <Command shouldFilter={false} className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Start typing an address (min 3 characters)..."
          autoComplete="off"
          value={input}
          onValueChange={(value) => {
            setInput(value);
            if (value.length >= 3) setOpen(true);
          }}
          onFocus={() => {
            if (input.length >= 3) setOpen(true);
          }}
        />
        {open && (
          <CommandList className="absolute top-full w-full bg-white shadow-lg rounded-b-lg border z-50 max-h-60 overflow-auto">
            {loading ? (
              <CommandEmpty>Loading suggestions...</CommandEmpty>
            ) : hasSearched && suggestions.length === 0 ? (
              <CommandEmpty>No addresses found</CommandEmpty>
            ) : (
              <CommandGroup>
                {suggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion.place_id}
                    value={suggestion.description}
                    onSelect={() => handleSelect(suggestion)}
                    className="cursor-pointer hover:bg-gray-50"
                  >
                    {suggestion.description}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  );
};
