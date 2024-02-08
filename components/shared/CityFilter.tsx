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
import { ICity } from "@/lib/database/models/city.model";
import { getAllCities } from "@/lib/actions/cities.action";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { getAllCategories } from "@/lib/actions/category.action";
import { ICategory } from "@/lib/database/models/category.model";

const CityFilter = () => {
  const [cities, setCities] = useState<ICity[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

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

  useEffect(() => {
    const getCities = async () => {
      const cityList = await getAllCities();

      cityList && setCities(cityList as ICity[]);
    };

    getCities();
  }, []);

  console.log(cities);

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
            value={city.name}
            key={city._id}
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
