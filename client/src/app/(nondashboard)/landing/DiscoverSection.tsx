"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useGetAuthUserQuery } from "@/state/api";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const DiscoverSection = () => {
  const { data: authUser } = useGetAuthUserQuery();

  const isManager = authUser?.userRole?.toLowerCase() === "manager";
  const isSignedIn = Boolean(authUser);

  const heading = !isSignedIn
    ? "Welcome to Juncify"
    : isManager
    ? "Manage & Grow Your Contractor Team"
    : "Discover";

  const subheading = !isSignedIn
    ? "Find Trusted Professionals for Any Service"
    : isManager
    ? "Post Jobs, Track Applications & Approve Trusted Professionals"
    : "Find the Perfect Service for Your Home & Lifestyle Today!";

  const description = !isSignedIn
    ? "Sign in to start hiring or finding skilled professionals near you."
    : isManager
    ? "Juncify helps you effortlessly post jobs, review contractor applications, and manage your workforce."
    : "Finding the right service for your home or personal needs has never been easier. Start exploring today!";

  const cards = !isSignedIn
    ? [
        {
          imageSrc: "/landing-icon-wand.png",
          title: "Browse Services",
          description:
            "Explore available services and professionals near you without signing in.",
        },
        {
          imageSrc: "/landing-icon-calendar.png",
          title: "Sign Up Easily",
          description:
            "Create an account to book, post jobs, and manage your services seamlessly.",
        },
        {
          imageSrc: "/landing-icon-heart.png",
          title: "Join Our Community",
          description:
            "Connect with trusted professionals and get the best service experience.",
        },
      ]
    : isManager
    ? [
        {
          imageSrc: "/landing-icon-wand.png",
          title: "Post Jobs Easily",
          description:
            "Create and manage job postings to attract qualified professionals effortlessly.",
        },
        {
          imageSrc: "/landing-icon-calendar.png",
          title: "Track Applications",
          description:
            "Review contractor profiles, approve or reject applications, and stay in control.",
        },
        {
          imageSrc: "/landing-icon-heart.png",
          title: "Manage Your Team",
          description:
            "Keep a list of approved contractors and monitor their service quality and status.",
        },
      ]
    : [
        {
          imageSrc: "/landing-icon-wand.png",
          title: "Find Verified Services",
          description:
            "Easily search for trusted professionals, from electricians to any skilled traders.",
        },
        {
          imageSrc: "/landing-icon-calendar.png",
          title: "Book Instantly",
          description:
            "Schedule services with just a few clicks—no hassle, no waiting.",
        },
        {
          imageSrc: "/landing-icon-heart.png",
          title: "Enjoy Quality Service",
          description:
            "Relax as skilled professionals take care of your needs, right at your doorstep.",
        },
      ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="bg-white mb-24"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subheading}</p>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">{description}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 text-center">
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => (
  <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72">
    <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
      <Image
        src={imageSrc}
        width={30}
        height={30}
        className="w-full h-full"
        alt={title}
      />
    </div>
    <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
    <p className="mt-2 text-base text-gray-500">{description}</p>
  </div>
);

export default DiscoverSection;
