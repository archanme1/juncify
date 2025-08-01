"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGetAuthUserQuery } from "@/state/api";

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

const FeaturesSection = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const isManager = authUser?.userRole?.toLowerCase() === "manager";
  const isSignedIn = Boolean(authUser);

  // Titles per user type
  const titles = !isSignedIn
    ? [
        "Browse Trusted Professionals",
        "Explore Service Options",
        "Get Started Quickly",
      ]
    : isManager
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

  // Descriptions per user type
  const descriptions = !isSignedIn
    ? [
        "Browse skilled professionals near you without signing in.",
        "Explore a wide range of home and personal services.",
        "Create an account to book and manage services with ease.",
      ]
    : isManager
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

  // Link text per user type
  const linkTexts = !isSignedIn
    ? ["Browse Now", "Explore Services", "Sign Up"]
    : isManager
    ? ["Create", "Discover", "Find"]
    : ["Discover", "Search", "Favorites"];

  // Link hrefs per user type
  const linkHrefs = !isSignedIn
    ? ["/", "/search", "/signup"]
    : isManager
    ? ["/managers/newcontractor", "/managers/junction", "/managers/contractors"]
    : ["/customers/junction", "/search", "/customers/favorites"];

  // Heading text
  const heading = !isSignedIn
    ? "Welcome! Browse Services Without Signing In"
    : isManager
    ? "Offer a service? Join as a manager and get discovered!"
    : "Instantly Find the Right Service for Your Home & Lifestyle!";

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
          {heading}
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
  linkText,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
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
    <a
      href={linkHref}
      className="inline-block border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
    >
      {linkText}
    </a>
  </div>
);

export default FeaturesSection;
