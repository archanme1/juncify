"use client";

import React, { useEffect, useRef } from "react";
import { MapboxSearchBox, config } from "@mapbox/search-js-web";

config.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

interface AddressSearchBoxProps {
  onSelect: (feature: any) => void;
  onChange?: (value: string) => void;
  value?: string;
}

const AddressSearchBox: React.FC<AddressSearchBoxProps> = ({
  onSelect,
  onChange,
  value,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<MapboxSearchBox | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ✅ The MapboxSearchBox is itself a DOM node
    const searchBox = new MapboxSearchBox() as unknown as HTMLElement &
      MapboxSearchBox;

    // Configure
    (searchBox as MapboxSearchBox).accessToken = config.accessToken!;
    (searchBox as MapboxSearchBox).options = { language: "en" };

    // ✅ Append the component directly
    containerRef.current.appendChild(searchBox);

    // Keep ref
    searchBoxRef.current = searchBox as MapboxSearchBox;

    // ✅ When user selects a suggestion
    (searchBox as MapboxSearchBox).addEventListener("retrieve", (e: any) => {
      const feature = e.detail;
      onSelect(feature);
    });

    // ✅ When user types
    (searchBox as MapboxSearchBox).addEventListener("input", (e: any) => {
      const val = (e.target as HTMLInputElement).value;
      onChange?.(val);
    });

    return () => {
      searchBoxRef.current?.remove();
    };
  }, [onSelect, onChange]);

  // ✅ Keep value synced
  useEffect(() => {
    const searchBox = searchBoxRef.current as unknown as HTMLElement;
    if (!searchBox) return;
    const input = searchBox.querySelector("input") as HTMLInputElement | null;
    if (input && value !== undefined && input.value !== value) {
      input.value = value;
    }
  }, [value]);

  return <div ref={containerRef} className="w-full" />;
};

export default AddressSearchBox;
