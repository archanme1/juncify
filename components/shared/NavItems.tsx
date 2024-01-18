"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { headerLinks } from "@/constants";
import Link from "next/link";

const NavItems = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <ul className="md:flex-between md:flex-row justify-between flex gap-6 w-full flex-col items-start">
      {headerLinks.map((link) => {
        const isActive = pathname === link.forwardingRoute;

        return (
          <li
            key={link.forwardingRoute}
            className={`${
              isActive && "text-red-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.forwardingRoute}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
