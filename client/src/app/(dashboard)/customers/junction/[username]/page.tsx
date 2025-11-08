"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Feed from "@/components/Feed";
import { useParams } from "next/navigation";
import { useGetAuthUserQuery, useGetUserProfileQuery } from "@/state/api";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import FollowSection from "@/components/Follow";

const UserPage = () => {
  const params = useParams();
  const username = params?.username as string;
  const { data: authUser } = useGetAuthUserQuery();
  const userId = authUser?.userInfo.cognitoId;

  const {
    data: userProfile,
    isLoading,
    error,
  } = useGetUserProfileQuery({ username, userId });

  console.log("userProfile: ", userProfile);

  const profileCognitoId =
    userProfile?.manager?.cognitoId || userProfile?.customer?.cognitoId;

  if (isLoading) return <Loading />;
  if (!userProfile)
    return (
      <div className="dashboard-container">
        <Badge variant="destructive">User Not Found!!</Badge>
      </div>
    );
  if (error)
    return (
      <div className="dashboard-container">
        <Badge variant="destructive">Failed to Load Posts!!</Badge>
      </div>
    );

  return (
    <div className="flex ">
      <div className="flex-3 xsm:px-4 xxl:px-8 ">
        <div className="flex items-center justify-between sticky top-0 z-10 p-4 bg-white">
          {/* Left Section: Back + Username */}
          <div className="flex items-center gap-4">
            <Link href="/customers/junction" className="cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-bold text-gray-600 text-lg">{username}</h1>
          </div>

          {/* Right Section: Icons + Button */}
          <div className="flex items-center gap-6">
            <FollowSection
              username={username}
              profileOwnerCognitoId={profileCognitoId} // renamed for clarity
              initialFollowers={userProfile._count.followers}
              initialFollowings={userProfile._count.followings}
              initialIsFollowed={userProfile.isFollowed}
            />
          </div>
        </div>
        {/* FEED */}
        <div className="m-3">
          <Feed userProfileId={userProfile?.id} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
