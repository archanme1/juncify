import React from "react";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 bg-white">
      {/* <TrendingUp /> */}
      {/* TREND EVENT */}
      {/* <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden"></div>
        <div className="flex-1">
          <h2 className="font-bold text-primary-700Light">
            Nadal v Federer Grand Slam
          </h2>
          <span className="text-sm text-primary-700">Last Night</span>
        </div>
      </div> */}
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-primary-700 text-sm">
            Technology • Trending
          </span>
        </div>
        <h2 className="text-primary-700Light font-bold">OpenAI</h2>
        <span className="text-primary-700 text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-primary-700 text-sm">
            Technology • Trending
          </span>
        </div>
        <h2 className="text-primary-700Light font-bold">OpenAI</h2>
        <span className="text-primary-700 text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-primary-700 text-sm">
            Technology • Trending
          </span>
        </div>
        <h2 className="text-primary-700Light font-bold">OpenAI</h2>
        <span className="text-primary-700 text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-primary-700 text-sm">
            Technology • Trending
          </span>
        </div>
        <h2 className="text-primary-700Light font-bold">OpenAI</h2>
        <span className="text-primary-700 text-sm">20K posts</span>
      </div>
      <Link href="/" className="text-secondary-700 underline">
        Show More
      </Link>
    </div>
  );
};

export default Popular;
