"use client";

import React from "react";
import Post from "./Post";
import { useGetAuthUserQuery, useGetPostsQuery } from "@/state/api";
import Loading from "./Loading";
import { skipToken } from "@reduxjs/toolkit/query";
import { PostType } from "@/types/prismaTypes";
import InfiniteFeed from "./InfiniteFeed";
import { Badge } from "./ui/badge";

interface FeedProps {
  type?: "foryou" | "following" | "otherjunction" | "savedPosts"; // optional, default to "foryou"
  userProfileId?: string; // for profile page
}

const Feed = ({ type = "foryou", userProfileId }: FeedProps) => {
  const { data: authUser } = useGetAuthUserQuery();

  const {
    data: postss,
    error,
    isLoading,
  } = useGetPostsQuery(
    authUser?.cognitoInfo.userId
      ? {
          userId: authUser.cognitoInfo.userId,
          userProfileId, // when present → backend ignores filterType
          filterType: userProfileId ? undefined : type,
        }
      : skipToken,
  );

  const posts = postss?.posts || [];

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="dashboard-container">
        <Badge variant="destructive">Failed to Load Posts!!</Badge>
      </div>
    );

  // TO Fetch BACKEND ERROR MESSAGE
  // if (error) {
  //   const errMsg =
  //     (error as any)?.data?.error || // backend error message
  //     (error as any)?.error || // RTK’s error key
  //     "Something went wrong while loading posts.";

  //   return <p className="text-red-500 text-center mt-5">{errMsg}</p>;
  // }

  return (
    <div>
      {posts?.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
      {authUser?.cognitoInfo.userId && (
        <InfiniteFeed
          userId={authUser.cognitoInfo.userId}
          filterType={type}
          userProfileId={userProfileId}
        />
      )}
    </div>
  );
};

export default Feed;
