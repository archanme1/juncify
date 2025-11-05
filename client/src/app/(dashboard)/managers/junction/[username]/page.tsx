"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Feed from "@/components/Feed";
import { notFound, useParams } from "next/navigation";
import { useGetAuthUserQuery, useGetUserProfileQuery } from "@/state/api";
import Loading from "@/components/Loading";

const UserPage = () => {
  const params = useParams();
  const username = params?.username as string;
  const { data: authUser } = useGetAuthUserQuery();
  const userRole = authUser?.userRole;

  const {
    data: userProfile,
    isLoading,
    error,
  } = useGetUserProfileQuery({ username });

  if (!userProfile) return notFound();
  if (isLoading) return <Loading />;
  if (error) return <p>Failed to load posts.</p>;

  return (
    <div className="flex">
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
          <div className="flex items-center gap-4">
            {/* <CircleEllipsis width={20} height={20} />
        <Telescope width={20} height={20} />
        <MessageCircle width={20} height={20} /> */}
            {/* <span className="text-textGray text-sm">@johndoe</span> */}
            <Button
              variant="outline"
              className="cursor-pointer text-black bg-white border-gray-400 hover:bg-secondary-500 hover:text-white"
            >
              Follow
            </Button>
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
