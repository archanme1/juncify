import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.action";
import { ICity } from "@/lib/database/models/city.model";
import { createCity, getAllCities } from "@/lib/actions/cities.action";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
  typeOfDropdown?: string;
};

const Dropdown = ({
  onChangeHandler,
  value,
  typeOfDropdown,
}: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  const [newCategory, setNewCategory] = useState("");
  const [newCity, setNewCity] = useState("");

  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),
    }).then((category) => {
      setCategories((prev) => [...prev, category]);
    });
  };

  const handleAddCity = () => {
    createCity({
      cityName: newCity.trim(),
    }).then((city) => {
      setCities((prev) => [...prev, city]);
    });
  };

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList as ICategory[]);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      const cityList = await getAllCities();
      cityList && setCities(cityList as ICity[]);
    };

    getCities();
  }, []);

  return (
    <>
      {typeOfDropdown === "category" ? (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
          <SelectTrigger className="select-field">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category._id} value={category._id}>
                {category.name}
              </SelectItem>
            ))}
            <AlertDialog>
              <AlertDialogTrigger
                className=" p-medium-14 flex w-full rounded-sm py-3 pl-8 text-red-500 hover:bg-primary-50 focus:text-primary-50 "
                style={{ display: "none" }}
              >
                Add New Category
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Add New Category</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please Find your Related Category!
                    <Input
                      type="text"
                      placeholder="Category Name"
                      className="input-field mt-4"
                      onChange={(e) => setNewCategory(e.target.value)}
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => startTransition(handleAddCategory)}
                    disabled={true}
                  >
                    Add
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SelectContent>
        </Select>
      ) : typeOfDropdown === "city" ? (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
          <SelectTrigger className="select-field">
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city._id} value={city._id}>
                {city.name}
              </SelectItem>
            ))}
            <AlertDialog>
              <AlertDialogTrigger
                className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-red-500 hover:bg-primary-50 focus:text-primary-50"
                style={{ display: "none" }}
              >
                Add New City
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Add New City</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please Find your Related City!
                    <Input
                      type="text"
                      placeholder="City Name"
                      className="input-field mt-4"
                      onChange={(e) => setNewCity(e.target.value)}
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => startTransition(handleAddCity)}
                    disabled={true}
                  >
                    Add
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SelectContent>
        </Select>
      ) : (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
          <SelectTrigger className="select-field">
            <SelectValue placeholder="Available" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      )}
    </>
  );
};

export default Dropdown;
