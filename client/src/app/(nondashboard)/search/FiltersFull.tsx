import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { AmenityIcons, ContractorTypeIcons } from "@/lib/constants";
import { cleanParams, cn, formatEnumString } from "@/lib/utils";
import { FiltersState, initialState, setFilters } from "@/state";
import { useAppSelector } from "@/state/redux";
import { debounce } from "lodash";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FiltersFull = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  // const filters = useAppSelector((state) => state.global.filters);
  const [localFilters, setLocalFilters] = useState(initialState.filters);
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

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

  const handleSubmit = () => {
    dispatch(setFilters(localFilters));
    updateURL(localFilters);
  };

  const handleReset = () => {
    setLocalFilters(initialState.filters);
    dispatch(setFilters(initialState.filters));
    updateURL(initialState.filters);
  };

  const handleAmenityChange = (amenity: AmenityEnum) => {
    setLocalFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  //   const handleLocationSearch = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
  //           localFilters.location
  //         )}.json?access_token=${
  //           process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  //         }&fuzzyMatch=true`
  //       );
  //       const data = await response.json();
  //       if (data.features && data.features.length > 0) {
  //         const [lat, lng] = data.features[0].center;
  //         setLocalFilters((prev) => ({
  //           ...prev,
  //           coordinates: [lat, lng],
  //         }));
  //       }
  //     } catch (err) {
  //       console.error("Error search location:", err);
  //     }
  //   };

  if (!isFiltersFullOpen) return null;

  return (
    <div className="bg-white rounded-lg px-4 h-full overflow-auto pb-10">
      <div className="flex flex-col space-y-6">
        {/* Location */}
        {/* <div>
          <h4 className="font-bold mb-2">Location</h4>
          <div className="flex items-center">
            <Input
              placeholder="Enter location"
              value={localFilters.location}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              className="rounded-l-xl rounded-r-none border-r-0"
            />
            <Button
              onClick={handleLocationSearch}
              className="rounded-r-xl rounded-l-none border-l-none border-black shadow-none border hover:bg-primary-700 hover:text-primary-50"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div> */}

        {/* Contractor Type */}
        <div>
          <h4 className="font-bold mb-2">Contractor Type</h4>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(ContractorTypeIcons).map(([type, Icon]) => (
              <div
                key={type}
                className={cn(
                  "flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer",
                  localFilters.contractorType === type
                    ? "border-secondary-500"
                    : "border-gray-200"
                )}
                onClick={() =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    contractorType: type as ContractorTypeEnum,
                  }))
                }
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="text-primary-700">{type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-bold mb-2">Price Range (Installation Fee)</h4>
          <Slider
            min={0}
            max={10000}
            step={100}
            value={[
              localFilters.priceRange[0] ?? 0,
              localFilters.priceRange[1] ?? 10000,
            ]}
            onValueChange={(value: any) =>
              setLocalFilters((prev) => ({
                ...prev,
                priceRange: value as [number, number],
              }))
            }
          />
          <div className="flex justify-between mt-2">
            <span>${localFilters.priceRange[0] ?? 0}</span>
            <span>${localFilters.priceRange[1] ?? 1000000}</span>
          </div>
        </div>

        {/* Team Size and Service Area Coverage */}
        <div className="flex gap-4">
          <div className="flex-1">
            <h4 className="font-bold mb-2">Team Size</h4>
            <Select
              value={localFilters.teamSize || "any"}
              onValueChange={(value) =>
                setLocalFilters((prev) => ({ ...prev, teamSize: value }))
              }
            >
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Team Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any team size</SelectItem>
                <SelectItem value="1">1+ team size</SelectItem>
                <SelectItem value="2">2+ team sizes</SelectItem>
                <SelectItem value="3">3+ team sizes</SelectItem>
                <SelectItem value="4">4+ team sizes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-2">Service Area Coverage</h4>
            <Select
              value={localFilters.serviceAreaCoverage || "any"}
              onValueChange={(value) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  serviceAreaCoverage: value,
                }))
              }
            >
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Service Area Coverage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any service area</SelectItem>
                <SelectItem value="10">10km</SelectItem>
                <SelectItem value="20">20km</SelectItem>
                <SelectItem value="30">30km</SelectItem>
                <SelectItem value="40">40km</SelectItem>
                <SelectItem value="50">50km</SelectItem>
                <SelectItem value="60">60km</SelectItem>
                <SelectItem value="70">70km</SelectItem>
                <SelectItem value="80">80km</SelectItem>
                <SelectItem value="90">90km</SelectItem>
                <SelectItem value="100">100km</SelectItem>
                <SelectItem value="500">500km</SelectItem>
                <SelectItem value="1000">1000km</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Years of Experience */}
        <div>
          <h4 className="font-bold mb-2">Years of Experience</h4>
          <Slider
            min={0}
            max={50}
            step={1}
            value={[
              localFilters.yearsOfExperience[0] ?? 0,
              localFilters.yearsOfExperience[1] ?? 50,
            ]}
            onValueChange={(value) =>
              setLocalFilters((prev) => ({
                ...prev,
                yearsOfExperience: value as [number, number],
              }))
            }
            className="[&>.bar]:bg-primary-700"
          />
          <div className="flex justify-between mt-2">
            <span>{localFilters.yearsOfExperience[0] ?? 0} yrs</span>
            <span>{localFilters.yearsOfExperience[1] ?? 50} yrs</span>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h4 className="font-bold mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(AmenityIcons).map(([amenity, Icon]) => (
              <div
                key={amenity}
                className={cn(
                  "flex items-center space-x-2 p-2 border rounded-lg hover:cursor-pointer",
                  localFilters.amenities.includes(amenity as AmenityEnum)
                    ? "border-secondary-500"
                    : "border-gray-200"
                )}
                onClick={() => handleAmenityChange(amenity as AmenityEnum)}
              >
                <Icon className="w-5 h-5 hover:cursor-pointer" />
                <Label className=" text-primary-700 font-normal hover:cursor-pointer ">
                  {formatEnumString(amenity)}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Available From */}
        <div>
          <h4 className="font-bold mb-2">Available From</h4>
          <Input
            type="date"
            value={
              localFilters.availableFrom !== "any"
                ? localFilters.availableFrom
                : ""
            }
            onChange={(e) =>
              setLocalFilters((prev) => ({
                ...prev,
                availableFrom: e.target.value ? e.target.value : "any",
              }))
            }
            className="rounded-xl "
          />
        </div>

        {/* Apply and Reset buttons */}
        <div className="flex gap-4 mt-6">
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-primary-700 text-white rounded-xl cursor-pointer hover:bg-secondary-500"
          >
            APPLY
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="flex-1 rounded-xl cursor-pointer"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersFull;
