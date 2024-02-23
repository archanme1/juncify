"use client";

import { IJunction } from "@/lib/database/models/junction.model";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ junction }: { junction: IJunction }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  const hasJunctionFinished = new Date(junction.endDateTime) < new Date();
  const isJunctionAvailable = junction.available;

  return (
    <div className="flex items-center gap-3">
      {hasJunctionFinished || isJunctionAvailable === "No" ? (
        <div className="flex flex-col">
          <p className="p-bold-16 text-gray-600">
            Sorry, Juntion is Either Expired or Not Available!
          </p>
          <p className="font-light text-gray-600">
            Please check back later if Date is not Expired.
          </p>
        </div>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-xl" size="lg">
              <Link href="/sign-in">Authorize & Purchase</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Checkout junction={junction} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
