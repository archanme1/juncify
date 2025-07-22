"use client";

import React, { useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { cleanParams, cn, formatPriceValue } from "@/lib/utils";
import {
  FiltersState,
  setFilters,
  setViewMode,
  toggleFiltersFullOpen,
} from "@/state";
import { useAppSelector } from "@/state/redux";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContractorTypeIcons } from "@/lib/constants";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const [searchQuery, setSearchQuery] = useState(filters.location || "");

  const updateURL = debounce((newFilters: FiltersState) => {
    const cleanFilters = cleanParams(newFilters);
    const updatedSearchParams = new URLSearchParams();

    Object.entries(cleanFilters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString()
      );
    });

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  });

  const handleFilterChange = (
    key: string,
    value: any,
    isMin: boolean | null
  ) => {
    let newValue = value;

    if (key === "priceRange" || key === "yearsOfExperience") {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else if (key === "coordinates") {
      newValue = value === "any" ? [0, 0] : value.map(Number);
    } else {
      newValue = value === "any" ? "any" : value;
    }

    const newFilters = { ...filters, [key]: newValue };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      // console.log("data: ", data);

      if (data.features && data.features.length > 0) {
        const [lat, lng] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("Error search location:", error);
    }
  };

  return (
    <div className="flex justify-between items-center w-full py-5">
      {/* View Mode */}
      <div className="flex justify-between items-center gap-4 p-2">
        <div className="flex border rounded-xl">
          <Button
            variant="ghost"
            className={cn(
              "px-3 py-1 rounded-none rounded-l-xl hover:bg-primary-700 hover:text-primary-50",
              viewMode === "list" ? "bg-secondary-500 text-primary-50" : ""
            )}
            onClick={() => dispatch(setViewMode("list"))}
          >
            <List className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "px-3 py-1 rounded-none rounded-r-xl hover:bg-primary-700 hover:text-primary-50",
              viewMode === "grid" ? "bg-secondary-500 text-primary-50" : ""
            )}
            onClick={() => dispatch(setViewMode("grid"))}
          >
            <Grid className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Search Location */}
      <div className="flex items-center">
        <Input
          placeholder="Search location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-120 rounded-l-xl rounded-r-none border-primary-400 border-r-0"
        />
        <Button
          // onClick={handleLocationSearch}
          className={`rounded-r-xl rounded-l-none border-l-none border-primary-400 shadow-none 
              border hover:bg-secondary-500 hover:text-primary-50`}
          onClick={handleLocationSearch}
        >
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Min Price Range */}
      <div className="flex  gap-1">
        {/* Minimum Price Selector */}
        <Select
          value={filters.priceRange[0]?.toString() || "any"}
          onValueChange={(value) =>
            handleFilterChange("priceRange", value, true)
          }
        >
          <SelectTrigger className="w-40 rounded-xl border-primary-400">
            <SelectValue>
              {formatPriceValue(filters.priceRange[0], true)}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="any">Any Min Price</SelectItem>
            {[500, 1000, 1500, 2000, 3000, 5000, 10000].map((price) => (
              <SelectItem key={price} value={price.toString()}>
                ${price / 1000}k+
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Max Price Selector */}
      <Select
        value={filters.priceRange[1]?.toString() || "any"}
        onValueChange={(value) =>
          handleFilterChange("priceRange", value, false)
        }
      >
        <SelectTrigger className="w-40 rounded-xl border-primary-400">
          <SelectValue>
            {formatPriceValue(filters.priceRange[1], false)}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="any">Any Max Price</SelectItem>
          {[1000, 2000, 3000, 5000, 10000].map((price) => (
            <SelectItem key={price} value={price.toString()}>
              &lt;${price / 1000}k
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Team Size and Baths */}
      <div className="flex gap-1">
        {/* Team Size */}
        <Select
          value={filters.teamSize}
          onValueChange={(value) => handleFilterChange("teamSize", value, null)}
        >
          <SelectTrigger className="w-40 rounded-xl border-primary-400">
            <SelectValue placeholder="Beds" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="any">Any Team Sizes</SelectItem>
            <SelectItem value="1"> Atleast 1+ Team Size</SelectItem>
            <SelectItem value="2"> Atleast 2+ Team Size</SelectItem>
            <SelectItem value="3"> Atleast 3+ Team Size</SelectItem>
            <SelectItem value="4"> Atleast 4+ Team Size</SelectItem>
          </SelectContent>
        </Select>

        {/* Service Area Coverage */}
        <Select
          value={filters.serviceAreaCoverage}
          onValueChange={(value) =>
            handleFilterChange("serviceAreaCoverage", value, null)
          }
        >
          <SelectTrigger className="w-60 rounded-xl border-primary-400">
            <SelectValue placeholder="Baths" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="any">Any Service Area(*1000km)</SelectItem>
            <SelectItem value="1">Max 1</SelectItem>
            <SelectItem value="2">Max 2</SelectItem>
            <SelectItem value="3">Max 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Contractor Type */}
      <Select
        value={filters.contractorType || "any"}
        onValueChange={(value) =>
          handleFilterChange("contractorType", value, null)
        }
      >
        <SelectTrigger className="w-50 rounded-xl border-primary-400">
          <SelectValue placeholder="Contractor Type" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="any">Any Contractor Type</SelectItem>
          {Object.entries(ContractorTypeIcons).map(([type, Icon]) => (
            <SelectItem key={type} value={type}>
              <div className="flex items-center">
                <Icon className="w-4 h-4 mr-2" />
                <span>{type}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Filters */}
      <div className="flex justify-between items-center gap-4 p-2">
        {/* All Filters */}
        <Button
          variant="outline"
          className={cn(
            "gap-2 rounded-xl  hover:bg-secondary-500 hover:border-secondary-600 hover:text-primary-100",
            isFiltersFullOpen &&
              "bg-secondary-500 border-secondary-500 text-primary-100"
          )}
          onClick={() => dispatch(toggleFiltersFullOpen())}
        >
          <Filter className="w-4 h-4" />
          <span>All Filters</span>
        </Button>
      </div>
    </div>
  );
};

export default FiltersBar;
