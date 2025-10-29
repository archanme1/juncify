import React from "react";
import Popular from "./Popular";
import Recommendation from "./Recommendation";
import Search from "./Search";
import Link from "next/link";

const Rightbar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <Popular />
      <Recommendation />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Terms</Link>
        <Link href="/">Privacy</Link>
        <span>©Juncify. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Rightbar;
