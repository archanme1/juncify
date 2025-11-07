"use client";

import { startTransition, useOptimistic, useState } from "react";
import {
  useGetAuthUserQuery,
  useUpdatePostInteractionMutation,
} from "@/state/api";
import { Button } from "./ui/button";
import Link from "next/link";

interface PostInteractionsProps {
  authUserRole: string;
  username: string;
  postId: number;
  count?: {
    likes: number;
    rePosts: number;
    comments: number;
  };
  isLiked: boolean;
  isRePosted: boolean;
  isSaved: boolean;
}

type InteractionType = "like" | "repost" | "save";

const PostInteractions = ({
  authUserRole,
  username,
  postId,
  count,
  isLiked,
  isRePosted,
  isSaved,
}: PostInteractionsProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const userId = authUser?.userInfo.cognitoId;
  const formattedUserId = `user_${userId}`;
  const isOwner = username === authUser?.userInfo.name;

  const [updatePostInteraction] = useUpdatePostInteractionMutation();

  // Base state (server-confirmed)
  const [state, setState] = useState({
    likes: count?.likes ?? 0,
    isLiked,
    rePosts: count?.rePosts ?? 0,
    isRePosted,
    isSaved,
  });

  // Optimistic UI setup
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    (currentState, type: InteractionType) => {
      switch (type) {
        case "like":
          return {
            ...currentState,
            likes: currentState.isLiked
              ? currentState.likes - 1
              : currentState.likes + 1,
            isLiked: !currentState.isLiked,
          };
        case "repost":
          return {
            ...currentState,
            rePosts: currentState.isRePosted
              ? currentState.rePosts - 1
              : currentState.rePosts + 1,
            isRePosted: !currentState.isRePosted,
          };
        case "save":
          return {
            ...currentState,
            isSaved: !currentState.isSaved,
          };
        default:
          return currentState;
      }
    }
  );

  // handler (switch-based)
  const handleInteraction = async (type: InteractionType) => {
    //Optimistic UI update
    startTransition(() => addOptimistic(type));

    try {
      // Call backend API
      await updatePostInteraction({ formattedUserId, postId, type }).unwrap();

      // Sync final state (server-confirmed)
      setState((prev) => {
        const newState = { ...prev };

        switch (type) {
          case "like":
            newState.likes = prev.isLiked ? prev.likes - 1 : prev.likes + 1;
            newState.isLiked = !prev.isLiked;
            break;

          case "repost":
            newState.rePosts = prev.isRePosted
              ? prev.rePosts - 1
              : prev.rePosts + 1;
            newState.isRePosted = !prev.isRePosted;
            break;

          case "save":
            newState.isSaved = !prev.isSaved;
            break;

          default:
            console.warn(`Unknown interaction type: ${type}`);
        }

        return newState;
      });
    } catch (error) {
      console.error(`Failed to update ${type}:`, error);

      // Rollback optimistic UI if failed
      startTransition(() => addOptimistic(type));
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 lg:gap-16 my-2 text-textGray">
      <div className="flex items-center gap-6 flex-1">
        {/* COMMENTS  */}
        <Link href={`/${authUserRole}s/junction/${username}/status/${postId}`}>
          <div className="flex items-center gap-1 cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                className="fill-textGray group-hover:fill-secondary-700"
                d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0
              8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054
              4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
              />
            </svg>
            <span className="group-hover:text-secondary-700 text-sm">
              {count?.comments ?? 0}
            </span>
          </div>
        </Link>

        {/* REPOST */}
        <Button
          onClick={() => handleInteraction("repost")}
          disabled={isOwner}
          className={`flex items-center gap-1 cursor-pointer group bg-transparent border-none p-0 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              className={`transition-all duration-200 ${
                optimisticState.isRePosted
                  ? "fill-green-700 scale-110"
                  : "fill-textGray scale-100"
              } group-hover:fill-green-700`}
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0
              .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853
              9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0
              4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603
              4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span
            className={`transition-all duration-200 ${
              optimisticState.isRePosted
                ? "text-green-700 scale-110"
                : "text-grey scale-100"
            } group-hover:text-green-700 text-sm`}
          >
            {optimisticState.rePosts}
          </span>
        </Button>

        {/* LIKE  */}
        <Button
          onClick={() => handleInteraction("like")}
          className="flex items-center gap-1 cursor-pointer group bg-transparent border-none p-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path
              className={`transition-all duration-200 ${
                optimisticState.isLiked
                  ? "fill-red-700 scale-110"
                  : "fill-textGray scale-100"
              } group-hover:fill-red-700`}
              d="M16.697 5.5c-1.222-.06-2.679.51-3.89
              2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91
              1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129
              6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04
              1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z"
            />
          </svg>
          <span
            className={`transition-all duration-200 ${
              optimisticState.isLiked
                ? "text-red-700 scale-110"
                : "text-grey scale-100"
            } group-hover:text-red-700 text-sm`}
          >
            {optimisticState.likes}
          </span>
        </Button>
      </div>

      {/* SAVE */}
      <Button
        onClick={() => handleInteraction("save")}
        disabled={isOwner}
        className={`cursor-pointer group bg-transparent border-none p-0 ${
          isOwner && "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            className={`transition-all duration-200 ${
              optimisticState.isSaved
                ? "fill-secondary-700 scale-110"
                : "fill-textGray scale-100"
            } group-hover:fill-secondary-700`}
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20
            3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29
            6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
          />
        </svg>
      </Button>
    </div>
  );
};

export default PostInteractions;
