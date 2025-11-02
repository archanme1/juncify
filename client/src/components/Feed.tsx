import React from "react";
import Post from "./Post";
import { useGetPostsQuery } from "@/state/api";

const Feed = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Failed to load posts.</p>;

  console.log("posts: ", posts);

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
