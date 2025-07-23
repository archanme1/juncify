"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`
      );
      const data = await response.json();
      // console.log("data: ", data);

      if (data.features && data.features.length > 0) {
        const [lat, lng] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/landing-splash.jpg"
        alt="Juncify Platform Hero Section"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Trusted Professionals for Your Home
          </h1>
          <p className="text-xl text-white my-10">
            On Juncify, Need any services nearby? Submit a request and choose
            the right professional at the best price—no middlemen, no hassle!
            It&apos;s your choice, your preference, your terms.
          </p>

          {/* Search Box */}
          <div className="flex justify-center gap-2">
            <Input
              type="text"
              placeholder="Search by city, neighborhood, or address"
              className="w-full max-w-lg rounded-l-xl border-none bg-white h-12 px-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="outline"
              className="cursor-pointer text-white h-12 border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
              onClick={handleLocationSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
