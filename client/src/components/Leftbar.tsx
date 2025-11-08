"use client";

import React, { useState } from "react";
import Header from "./Header";
import Feed from "./Feed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Share from "./Share";

const Leftbar = () => {
  const [activeTab, setActiveTab] = useState("foryou");

  return (
    <div className="">
      <Header
        title="Juncify Community"
        subtitle="View and manage your junction"
      />
      <Share />
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full my-5 "
      >
        {/* --- Tab Buttons --- */}
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="foryou">For You</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="otherjunction">Others Junction</TabsTrigger>
        </TabsList>

        {/* --- Tab Contents --- */}
        <TabsContent value="foryou" className="mt-2">
          <Feed type="foryou" />
        </TabsContent>

        <TabsContent value="following" className="mt-2">
          <Feed type="following" />
        </TabsContent>

        <TabsContent value="otherjunction" className="mt-2">
          <Feed type="otherjunction" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leftbar;
