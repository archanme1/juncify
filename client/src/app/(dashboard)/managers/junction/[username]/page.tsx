"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Feed from "@/components/Feed";
import { useParams } from "next/navigation";
import { useGetAuthUserQuery, useGetUserProfileQuery } from "@/state/api";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";

const UserPage = () => {
  const params = useParams();
  const username = params?.username as string;
  const { data: authUser } = useGetAuthUserQuery();

  const userId = authUser?.userInfo.cognitoId;

  const userRole = authUser?.userRole;

  const {
    data: userProfile,
    isLoading,
    error,
  } = useGetUserProfileQuery({ username, userId });

  const profileCognitoId =
    userProfile?.manager?.cognitoId ?? userProfile?.customer?.cognitoId;

  // Check if logged-in user is viewing their own profile
  const isOwnProfile = userId === profileCognitoId;

  //Check if logged in user follow the user profile or not
  const isFollowed = (userProfile?.followers?.length ?? 0) > 0;

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
            <Link href="/managers/junction" className="cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-bold text-gray-600 text-lg">
              {userRole === "manager"
                ? userProfile?.manager.name
                : userProfile?.customer.name}
            </h1>
          </div>

          {/* Right Section: Icons + Button */}
          <div className="flex items-center gap-6">
            {/* <CircleEllipsis width={20} height={20} />
        <Telescope width={20} height={20} />
        <MessageCircle width={20} height={20} /> */}
            {/* <span className="text-textGray text-sm">@johndoe</span> */}
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-secondary-500 text-white "
              >
                {userProfile._count.followings} Followings
              </Badge>
              <Badge
                variant="secondary"
                className="bg-secondary-500 text-white "
              >
                {userProfile._count.followers} Followers
              </Badge>
            </div>
            {!isOwnProfile && (
              <Button
                variant="outline"
                className="cursor-pointer font-bold text-secondary-500 bg-white border-secondary-500 hover:bg-secondary-500 hover:text-white"
              >
                {!isFollowed ? "Follow" : "UnFollow"}
              </Button>
            )}
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
