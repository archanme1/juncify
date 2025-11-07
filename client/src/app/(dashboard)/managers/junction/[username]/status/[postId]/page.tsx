"use client";

import Link from "next/link";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { ArrowLeft } from "lucide-react";
import { useGetAuthUserQuery, useGetPostQuery } from "@/state/api";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { UserType } from "@/types/prismaTypes";
import { skipToken } from "@reduxjs/toolkit/query";

const StatusPage = () => {
  const params = useParams();
  const { data: authUser } = useGetAuthUserQuery();
  const userId = authUser?.userInfo?.cognitoId;

  const username = params?.username as string;
  const postId = params?.postId as string;
  const {
    data: post,
    isLoading,
    error,
  } = useGetPostQuery(userId ? { username, postId, userId } : skipToken);

  const getUserName = (user: UserType): string => {
    if (!user) return "Unknown";
    if (user.manager) return user.manager.name;
    if (user.customer) return user.customer.name;
    return "Unknown";
  };

  const postUserName = getUserName(post?.user);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="dashboard-container">
        <Badge variant="destructive">Failed to Load Post!!</Badge>
      </div>
    );

  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-white">
        <Link href="/managers/junction" className="cursor-pointer">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post post={post} />
      <Comments
        postId={post.id}
        comments={post.comments ?? []}
        username={postUserName}
      />
    </div>
  );
};

export default StatusPage;
