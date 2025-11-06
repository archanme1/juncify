"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  useGetAuthUserQuery,
  useGetFriendRecommendationsQuery,
} from "@/state/api";
import Loading from "./Loading";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface FriendRecommendationType {
  id: string;
  manager: {
    name: string;
    cognitoId: string;
  } | null;
  customer: {
    name: string;
    cognitoId: string;
  } | null;
}

const Recommendation = () => {
  const { data: authUser } = useGetAuthUserQuery();

  const userId = authUser?.userInfo.cognitoId;
  const {
    data: friendsRecommendations,
    isLoading,
    error,
  } = useGetFriendRecommendationsQuery({
    userId,
  });

  const getRecommendationUserDisplayData = (user: FriendRecommendationType) => {
    const isManager = !!user?.manager;
    const isCustomer = !!user?.customer;

    const name =
      (isManager && user?.manager?.name) ||
      (isCustomer && user?.customer?.name) ||
      "Unknown";

    const role = isManager ? "managers" : isCustomer ? "customers" : "unknown";

    const avatarInitial = name?.charAt(0)?.toUpperCase() || "?";

    return { name, role, avatarInitial };
  };

  if (isLoading) return <Loading />;
  if (error)
    return <Badge variant="destructive">Friend Recommendation N/A</Badge>;

  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 bg-white">
      {/* USER CARD */}
      {friendsRecommendations.map((rec: FriendRecommendationType) => {
        const { name, role, avatarInitial } =
          getRecommendationUserDisplayData(rec);

        return (
          <div className="flex items-center justify-between" key={rec.id}>
            {/* USER INFO */}
            <div className="flex items-center gap-2">
              <Link href={`/${role}/junction/${name}`}>
                <Avatar>
                  <AvatarImage src={authUser?.userInfo?.image} />
                  <AvatarFallback className="bg-primary-500 text-white">
                    {avatarInitial}
                  </AvatarFallback>
                </Avatar>
              </Link>

              <div>
                <h1 className="text-md font-bold">{name}</h1>
                <span className="text-primary-500 text-sm">
                  @{name.toLowerCase().replace(/\s+/g, "")}
                </span>
              </div>
            </div>

            {/* FOLLOW BUTTON */}
            <Button
              variant="outline"
              className="cursor-pointer text-black bg-white hover:bg-secondary-500 hover:text-white"
            >
              Follow
            </Button>
          </div>
        );
      })}
      <Link href="/" className="text-secondary-700 underline cursor-pointer">
        Show More
      </Link>
    </div>
  );
};

export default Recommendation;
