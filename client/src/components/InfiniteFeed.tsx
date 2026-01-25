"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchAuthSession } from "aws-amplify/auth";
import Loading from "./Loading";
import Post from "./Post";
import { Badge } from "./ui/badge";

interface InfiniteFeedProps {
  userId: string;
  userProfileId?: string;
  filterType?: "foryou" | "following" | "otherjunction" | "savedPosts";
}

const fetchPosts = async (
  userId: string,
  pageParam: number,
  userProfileId?: string,
  filterType?: "foryou" | "following" | "otherjunction" | "savedPosts",
) => {
  const session = await fetchAuthSession();
  const { idToken } = session.tokens ?? {};

  const queryParams = new URLSearchParams();
  queryParams.append("userId", userId);
  queryParams.append("pageParam", String(pageParam)); // ✅ fixed
  queryParams.append("filterType", filterType || "foryou"); // ✅ fixed
  if (userProfileId) queryParams.append("userProfileId", userProfileId);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?${queryParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  return res.json();
};

const InfiniteFeed = ({
  userId,
  userProfileId,
  filterType = "foryou",
}: InfiniteFeedProps) => {
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["posts", userId, userProfileId, filterType],
    queryFn: ({ pageParam = 2 }) =>
      fetchPosts(userId, pageParam, userProfileId, filterType),
    // This skips the first 3 posts (page 1).
    //  RTK Query is already fetching page 1 (first 3 posts).
    // Confusing because if we load another tab (following), it won’t match page numbers.
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 2 : undefined,
    enabled: !!userId, // ✅ fixed
  });

  if (status === "pending") return <Loading />;
  if (error) return <div>Something went wrong!</div>;

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Loading />}
      endMessage={
        <div className="dashboard-container">
          <Badge>All Posts Loaded!!</Badge>
        </div>
      }
    >
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteFeed;
