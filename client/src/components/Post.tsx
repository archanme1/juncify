"use client";

import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useGetAuthUserQuery } from "@/state/api";
import PostInteractions from "./PostInteractions";

const Post = () => {
  const { data: authUser } = useGetAuthUserQuery();

  return (
    <div className="p-4 border-y-[1px] border-white">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span className="text-primary-500 ">johndoe reshared</span>
      </div>
      {/* //later content   */}
      <div className="flex gap-4">
        {/* avatar  */}
        <Avatar>
          <AvatarImage src={authUser?.userInfo?.image} />
          <AvatarFallback className="bg-primary-600 text-white">
            T
          </AvatarFallback>
        </Avatar>
        {/* content  */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <Link href={`/`} className="flex gap-4">
              <div className={`flex items-center gap-2 flex-wrap`}>
                <h1 className="text-md font-bold">John Doe</h1>
                <span className={`text-primary-500 `}>@johndoe</span>
                <span className="text-primary-500">1 day ago</span>
              </div>
            </Link>
            {/* <PostOption /> */}
          </div>
          {/* about post   */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
            eius non. Ex maiores quo quaerat, labore saepe quam corrupti sed
            vero. Repellendus perspiciatis accusantium at dolores architecto
            distinctio accusamus repellat!
          </p>
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
