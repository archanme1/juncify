"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const Search = ({ placeholder }: { placeholder?: string }) => {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  console.log(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl;
      if (query && query.length >= 3) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(newUrl, { scroll: false });

      return () => clearTimeout(delayDebounceFn);
    }, 300);
  }, [query, searchParams, router]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-xl bg-grey-50 px-4 py-2">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-600 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
