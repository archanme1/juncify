"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useGetAuthUserQuery } from "@/state/api";
import { Button } from "./ui/button";

const Share = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [desc, setDesc] = useState("");

  // Optional: Auto-resize textarea height
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
    setDesc(target.value);
  };

  return (
    <div className="p-4 flex gap-4">
      {/* avatar  */}
      <Avatar>
        <AvatarImage src={authUser?.userInfo?.image} />
        <AvatarFallback className="bg-primary-600 text-white">
          {authUser?.userRole?.[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>

      {/* post share others  */}
      {/* <input
        type="text"
        name="desc"
        placeholder="Drop something for the Junction community..."
        className="flex-1 bg-white outline-none placeholder:text-textGray text-xl px-4 py-2 rounded-md border border-gray-300 "
      /> */}
      <textarea
        name="desc"
        placeholder="Drop something for the Junction community..."
        value={desc}
        onChange={handleInput}
        rows={1}
        className="flex-1 resize-none bg-white outline-none placeholder:text-textGray text-xl px-4 py-2 rounded-[5px] border border-gray-300  overflow-hidden"
      />
      <div className="">
        <Button className="bg-secondary-500 text-primary-50 cursor-pointer">
          Post
        </Button>
      </div>
    </div>
  );
};

export default Share;
