import React from "react";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="bg-white py-2 px-4 flex items-center gap-4 rounded-full">
      <SearchIcon className="h-6 w-6 cursor-pointer" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-primary-500 outline-none placeholder:text-primary-500"
      />
    </div>
  );
};

export default Search;
