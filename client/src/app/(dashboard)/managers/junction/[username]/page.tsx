"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Feed from "@/components/Feed";

const UserPage = () => {
  return (
    <div className="flex">
      <div className="flex-3 xsm:px-4 xxl:px-8 ">
        <div className="flex items-center justify-between sticky top-0 z-10 p-4 bg-white">
          {/* Left Section: Back + Username */}
          <div className="flex items-center gap-4">
            <Link href="/managers/junction" className="cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-bold text-gray-600 text-lg">John Doe</h1>
          </div>

          {/* Right Section: Icons + Button */}
          <div className="flex items-center gap-4">
            {/* <CircleEllipsis width={20} height={20} />
        <Telescope width={20} height={20} />
        <MessageCircle width={20} height={20} /> */}
            <span className="text-textGray text-sm">@johndoe</span>
            <Button
              variant="outline"
              className="cursor-pointer text-black bg-white border-gray-400 hover:bg-secondary-500 hover:text-white"
            >
              Follow
            </Button>
          </div>
        </div>
        {/* FEED */}
        <Feed />
      </div>
    </div>
  );
};

export default UserPage;
