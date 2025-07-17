import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DiscoverSection from "./DiscoverSection";
import CallToActionSection from "./CallToActionSection";
import FooterSection from "./FooterSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      {/* <FeaturesSection manager={false} /> */}
      <CallToActionSection manager={false} />
      <FeaturesSection manager={true} />
      <CallToActionSection manager={true} />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
