"use client";

import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useGetAuthUserQuery } from "@/state/api";
import PostInteractions from "./PostInteractions";
import { PostType } from "@/types/prismaTypes";

interface PostProps {
  post: PostType;
  type?: "status" | "comment";
}

const Post = ({ post }: PostProps) => {
  const isRepost = !!post.rePostId;
  const originalPost = isRepost && post.rePost ? post.rePost : post;

  const likes = originalPost.likes ?? [];
  const isLiked = likes.length > 0;
  const reposts = originalPost.rePosts ?? [];
  const isReposted = reposts.length > 0;
  const saves = originalPost.saves ?? [];
  const isSaved = saves.length > 0;

  const { data: authUser } = useGetAuthUserQuery();

  // User who reposted
  const repostedByUser = isRepost ? post.user : null;
  const reposterName =
    repostedByUser?.manager?.name ||
    repostedByUser?.customer?.name ||
    "Someone";
  // User who created the original post
  const originalUser = originalPost?.user;

  const isManagerPost = !!originalUser?.manager;
  const isCustomerPost = !!originalUser?.customer;

  const originalUserName =
    (isManagerPost && originalUser?.manager?.name) ||
    (isCustomerPost && originalUser?.customer?.name) ||
    "Unknown";

  const originalUserRole = isManagerPost
    ? "managers"
    : isCustomerPost
    ? "customers"
    : "Unknown";

  const avatarInitial = originalUserName.charAt(0)?.toUpperCase() || "?";
  // const userUsername = originalPost.user?.manager
  //   ? `@${originalPost.user.manager.name.toLowerCase().replace(/\s+/g, "")}`
  //   : originalPost.user?.customer
  //   ? `@${originalPost.user.customer.name.toLowerCase().replace(/\s+/g, "")}`
  //   : "@unknown";

  return (
    <div className="p-4 mb-3 bg-white rounded">
      {/* POST TYPE */}
      {isRepost && (
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
          <span className="text-primary-500 ">{reposterName} reposted</span>
        </div>
      )}
      {/* //later content   */}
      <div className="flex gap-4">
        {/* avatar  */}
        <Link href={`/${originalUserRole}/junction/${originalUserName}`}>
          <Avatar>
            <AvatarImage src={authUser?.userInfo?.image} />
            <AvatarFallback className="bg-primary-500 text-white">
              {avatarInitial}
            </AvatarFallback>
          </Avatar>
        </Link>
        {/* content  */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <div className={`flex items-center gap-2 flex-wrap`}>
              <Link href={`/${originalUserRole}/junction/${originalUserName}`}>
                <h1 className="text-md font-bold">{originalUserName}</h1>
              </Link>
              {/* <span className={`text-primary-500 `}>{userUsername}</span> */}
              <span className="text-primary-500">
                {formatDistanceToNow(new Date(originalPost.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
            {/* <PostOption /> */}
          </div>
          {/* about post   */}
          {originalPost.desc && <p>{originalPost.desc}</p>}
          <PostInteractions
            username={originalUserName}
            postId={originalPost.id}
            count={originalPost._count}
            isLiked={isLiked}
            isRePosted={isReposted}
            isSaved={isSaved}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
