"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FeaturesSection = ({ manager }: { manager: boolean }) => {
  const titles = manager
    ? [
        "Grow Your Business with Verified Services",
        "Offer Your Expertise & Get Discovered",
        "Seamless Job Management for Service Providers",
      ]
    : [
        "Verified & Trusted Services",
        "Find Any Service You Need, Anytime",
        "Seamless Booking for You",
      ];

  const descriptions = manager
    ? [
        "List your services, from electricians to HVAC, and get discovered by potential clients in your area.",
        "Easily create your profile, set your service areas, and attract new customers looking for trusted professionals.",
        "Receive service requests at your convenience—accept jobs on your terms and grow your business effortlessly.",
      ]
    : [
        "Connect with skilled professionals, from electricians to any trades service professionals.",
        "Easily browse and discover a wide range of home and personal services tailored to your needs.",
        "Book verified skilled traders instantly and enjoy a hassle-free experience for your home.",
      ];

  const linkTexts = manager
    ? ["Explore", "Search", "Discover"]
    : ["Book Now", "Browse Options", "Get Started"];

  const linkHrefs = manager
    ? ["/explore", "/search", "/discover"]
    : ["/book", "/browse", "/start"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
    >
      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
          {manager
            ? "Offer a service? Join as a manager and get discovered!"
            : "Instantly Find the Right Service for Your Home & Lifestyle!"}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2].map((index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                imageSrc={`/landing-search${3 - index}.png`}
                title={titles[index]}
                description={descriptions[index]}
                linkText={linkTexts[index]}
                linkHref={linkHrefs[index]}
                manager={manager}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  manager: boolean;
}) => (
  <div className="text-center">
    <div className="p-4 rounded-lg mb-4 flex items-center justify-center h-48">
      <Image
        src={imageSrc}
        width={400}
        height={400}
        className="w-full h-full object-contain"
        alt={title}
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    {/* {!manager && (
      <Link
        href={linkHref}
        className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
        scroll={false}
      >
        {linkText}
      </Link>
    )} */}
  </div>
);

export default FeaturesSection;
