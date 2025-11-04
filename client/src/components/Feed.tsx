import React from "react";
import Post from "./Post";
import { useGetAuthUserQuery, useGetPostsQuery } from "@/state/api";
import Loading from "./Loading";
import { skipToken } from "@reduxjs/toolkit/query";
import { PostType } from "@/types/prismaTypes";
import InfiniteFeed from "./InfiniteFeed";

interface FeedProps {
  type?: "foryou" | "following" | "otherjunction"; // optional, default to "foryou"
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
          filterType: type,
          userProfileId,
        }
      : skipToken
  );

  const posts = postss?.posts || [];

  if (isLoading) return <Loading />;
  if (error) return <p>Failed to load posts.</p>;

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
        <InfiniteFeed userId={authUser.cognitoInfo.userId} filterType={type} />
      )}
    </div>
  );
};

export default Feed;
