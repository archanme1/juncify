"use client";

import { useState } from "react";
import Post from "./Post";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const Comments = () => {
  const [reply, setReply] = useState("");

  // Optional: Auto-resize textarea height
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    target.style.height = "auto";
    target.style.height = `${target.scrollHeight}px`;
    setReply(target.value);
  };
  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4 ">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-primary-600 text-white">
              T
            </AvatarFallback>
          </Avatar>
        </div>
        <textarea
          name="desc"
          placeholder="Drop something for the Junction community..."
          value={reply}
          onChange={handleInput}
          rows={1}
          className="flex-1 resize-none bg-white outline-none placeholder:text-textGray text-xl px-4 py-2 rounded-[5px] border border-gray-300  overflow-hidden"
        />
        <Button className="bg-secondary-500 text-primary-50 cursor-pointer">
          Reply
        </Button>
      </form>
      <div className="pl-12">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Comments;
