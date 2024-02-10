"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { getAllCities } from "@/lib/actions/cities.action";
import { ICity } from "@/lib/database/models/city.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

const CityFilter = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const cachedCities = localStorage.getItem("cities");
    if (cachedCities) {
      setCities(JSON.parse(cachedCities));
    } else {
      const getCities = async () => {
        try {
          const cityList = await getAllCities();
          localStorage.setItem("cities", JSON.stringify(cityList));
          setCities(cityList as ICity[]);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      getCities();
    }
  }, []);

  const onSelectCity = (city: string) => {
    let newUrl = "";

    if (city && city !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "city",
        value: city,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["city"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <Select onValueChange={(value: string) => onSelectCity(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="City" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">
          All
        </SelectItem>

        {cities.map((city) => (
          <SelectItem
            key={city._id}
            value={city.name}
            className="select-item p-regular-14"
          >
            {city.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CityFilter;
