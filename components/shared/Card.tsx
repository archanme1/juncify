import React from "react";
import Image from "next/image";
import Link from "next/link";

import { IJunction } from "@/lib/database/models/junction.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  junction: IJunction;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ junction, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isJunctionCreator = userId === junction?.organizer?._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/junctions/${junction?._id}`}
        style={{ backgroundImage: `url(${junction?.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-600"
      />

      {/* IS JUNCTION CREATOR ... */}
      {isJunctionCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex  gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <DeleteConfirmation junctionId={junction?._id} />
          <Link href={`/junctions/${junction?._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-xl bg-red-100 px-4 py-1 text-red-500">
              {junction?.isFree ? "FREE" : `$${junction?.price}`}
            </span>
            <p className="p-semibold-14 w-max rounded-xl bg-blue-500/10 px-4 py-1 text-blue-500 line-clamp-1">
              {junction?.category?.name.toUpperCase()}
            </p>
          </div>
        )}

        <div className="flex gap-2 md:gap-3">
          <Image
            src="/assets/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          <p className="p-medium-16 p-medium-18 text-grey-600">
            {formatDateTime(junction?.startDateTime).dateTime}
          </p>
        </div>

        <Link href={`/junctions/${junction?._id}`}>
          <p className="p-medium-16 md:p-medium-20 flex-1 text-black  truncate">
            {junction?.title}
          </p>
        </Link>

        <div className="flex items-center gap-1 w-full">
          <span className="p-medium-16">by</span>
          <p className="p-medium-14 md:p-medium-16 text-red-500 ">
            {junction?.organizer.firstName.toUpperCase()}{" "}
            {junction?.organizer.lastName.toUpperCase()}
          </p>
          {hasOrderLink && (
            <Link
              href={`/orders?junctionId=${junction?._id}`}
              className="flex gap-2"
            >
              <p className="text-blue-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width={10}
                height={10}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
