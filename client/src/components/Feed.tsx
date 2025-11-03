import React from "react";
import Post from "./Post";
import { useGetAuthUserQuery, useGetPostsQuery } from "@/state/api";
import Loading from "./Loading";
import { skipToken } from "@reduxjs/toolkit/query";
import { PostType } from "@/types/prismaTypes";

const Feed = () => {
  const { data: authUser } = useGetAuthUserQuery();

  const {
    data: posts,
    error,
    isLoading,
  } = useGetPostsQuery(
    authUser?.cognitoInfo.userId
      ? { userId: authUser.cognitoInfo.userId }
      : skipToken
  );

  console.log("data: ", posts);

  if (isLoading) return <Loading />;
  if (error) return <p>Failed to load posts.</p>;

  return (
    <div>
      {posts?.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
