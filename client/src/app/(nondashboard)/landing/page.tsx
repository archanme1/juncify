import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      {<DiscoverSection />}
      {/* <FeaturesSection  /> */}
      <CallToActionSection />
      <FeaturesSection />
      {/* <CallToActionSection  /> */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
