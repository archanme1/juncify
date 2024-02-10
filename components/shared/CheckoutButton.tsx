"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  const hasEventFinished = new Date(event.endDateTime) < new Date();
  const isEventAvailable = event.available;

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished || isEventAvailable === "No" ? (
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
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
