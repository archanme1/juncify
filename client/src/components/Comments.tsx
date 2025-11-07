"use client";

import { useState } from "react";
import Post from "./Post";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { CommentType } from "@/types/prismaTypes";
import { Badge } from "./ui/badge";
import { useGetAuthUserQuery } from "@/state/api";

interface CommentsProps {
  postId: number;
  comments: CommentType[];
  username: string;
}

const Comments = ({ postId, comments, username }: CommentsProps) => {
  const [reply, setReply] = useState("");
  const { data: authUser } = useGetAuthUserQuery();
  const loggedInUsername = authUser?.userInfo.name;
  const avatarInitial = loggedInUsername.charAt(0)?.toUpperCase() || "?";

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
              {avatarInitial}
            </AvatarFallback>
          </Avatar>
        </div>
        <textarea
          name="desc"
          placeholder="Comment......"
          value={reply}
          onChange={handleInput}
          rows={1}
          className="flex-1 resize-none bg-white outline-none placeholder:text-textGray text-xl px-4 py-2 rounded-[5px] border border-gray-300  overflow-hidden"
        />
        <Button className="bg-secondary-500 text-primary-50 cursor-pointer">
          Reply
        </Button>
      </form>
      <div className="px-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Post key={comment.id} post={comment} type="comment" />
          ))
        ) : (
          <Badge variant="destructive">No Comments Yet!!</Badge>
        )}
      </div>
    </div>
  );
};

export default Comments;
