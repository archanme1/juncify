"use client";

import { startTransition, useState } from "react";
import { useGetAuthUserQuery, useToggleFollowUserMutation } from "@/state/api";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface FollowSectionProps {
  username: string; // profile username being viewed
  profileOwnerCognitoId: string; // target user cognito ID
  initialFollowers: number;
  initialFollowings: number;
  initialIsFollowed: boolean;
}

// SOMETHING IS OFF WITH FOLLOWERS AND FOLLOWING || band-aided | need conceptual correction ❓

const FollowSection = ({
  username,
  profileOwnerCognitoId,
  initialFollowers,
  initialFollowings,
  initialIsFollowed,
}: FollowSectionProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const viewerCognitoId = authUser?.userInfo?.cognitoId;
  const isOwnProfile = viewerCognitoId === profileOwnerCognitoId;

  const [toggleFollowUser] = useToggleFollowUserMutation();

  //  Freeze counts — they never change on this page
  const frozenFollowers = initialFollowers;
  const frozenFollowings = initialFollowings;

  // Local toggle for button only
  const [buttonFollowed, setButtonFollowed] = useState(initialIsFollowed);

  const handleFollow = async () => {
    if (!viewerCognitoId || !username || isOwnProfile) return;

    // Just flip the button visually
    startTransition(() => setButtonFollowed((prev) => !prev));

    try {
      await toggleFollowUser({
        username,
        followerCognitoId: viewerCognitoId,
      }).unwrap();
      // do nothing with counts — they stay frozen
    } catch (error) {
      console.error("Follow/unfollow failed:", error);
      startTransition(() => setButtonFollowed((prev) => !prev)); // rollback button
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/*  Frozen counts: never change until page reload */}
      <Badge variant="secondary" className="bg-secondary-500 text-white">
        {frozenFollowers} Followings
      </Badge>
      <Badge variant="secondary" className="bg-secondary-500 text-white">
        {frozenFollowings} Followers
      </Badge>

      {!isOwnProfile && (
        <Button
          onClick={handleFollow}
          variant="outline"
          className={`cursor-pointer font-bold border-secondary-500 text-secondary-500 bg-white hover:bg-secondary-500 hover:text-white transition-all duration-200 ${
            buttonFollowed ? "border-secondary-700 bg-secondary-50" : ""
          }`}
        >
          {buttonFollowed ? "Unfollow" : "Follow"}
        </Button>
      )}
    </div>
  );
};

export default FollowSection;
