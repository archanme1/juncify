"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetAuthUserQuery } from "@/state/api";

const CallToActionSection = () => {
  const router = useRouter();
  const { data: authUser } = useGetAuthUserQuery();
  const isManager = authUser?.userRole?.toLowerCase() === "manager";

  const title = isManager
    ? "Let Juncify Do the Hiring"
    : "Browse Trusted Professionals.";

  const subtitle = isManager
    ? "Post jobs, manage applicants, and get your work done efficiently with professionals ready to go."
    : "Search, compare, and connect with verified contractors—on your terms, at your price.";

  return (
    <div className="relative py-24">
      <Image
        src="/landing-splash.jpg"
        alt="Juncify Search Section Background"
        fill
        className={!isManager ? "object-cover" : "object-cover object-top"}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-primary-900 mb-3 font-extrabold text-xl md:text-2xl">
              {title}
            </h2>
            <p className="text-primary-600 mb-6 max-w-lg text-sm md:text-base">
              {subtitle}
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              {!isManager ? (
                <button
                  onClick={() => router.push("/search")}
                  className="cursor-pointer inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-700 hover:text-primary-50"
                >
                  Search Services
                </button>
              ) : (
                <Link
                  href="/managers/newcontractor"
                  className="cursor-pointer inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-700 hover:text-primary-50"
                >
                  Post a Job
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
