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
      <Header title="Your Junction" subtitle="View and manage your junction" />
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
          <TabsTrigger value="contractorsjunction">
            Contractors Junction
          </TabsTrigger>
        </TabsList>

        {/* --- Tab Contents --- */}
        <TabsContent value="foryou" className="mt-5">
          <Feed />
        </TabsContent>

        <TabsContent value="following" className="mt-5">
          <div className="text-gray-600 text-center py-10">
            <p>Content from accounts you follow will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="contractorsjunction" className="mt-5">
          <div className="text-gray-600 text-center py-10">
            <p>Explore Contractors Junction content here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Leftbar;
