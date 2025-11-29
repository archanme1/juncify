"use client";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React, { Suspense } from "react";

const NonDashboardPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { data: authUser } = useGetAuthUserQuery();
  // console.log("auth User: ", authUser);

  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default NonDashboardPageLayout;
