"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CallToActionSection = ({ manager }: { manager: boolean }) => {
  const router = useRouter();
  return (
    <div className="relative py-24">
      <Image
        src="/landing-splash.jpg"
        alt="Juncify Search Section Background"
        fill
        className={manager ? "object-cover" : "object-cover object-top"}
      />
      {/* <div className="absolute inset-0 bg-primary-700 bg-opacity-60"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-black mb-3 font-bold uppercase">
              {manager ? "" : "Need a service? Browse trusted professionals."}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {!manager ? (
                <button
                  onClick={() => router.push("/search")}
                  className="cursor-pointer inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-700 hover:text-primary-50"
                >
                  Search
                </button>
              ) : (
                <Link
                  href="/signup/manager"
                  className="cursor-pointer inline-block text-primary-700 bg-white  rounded-lg px-6 py-3 font-semibold hover:bg-primary-700 hover:text-primary-50"
                  scroll={false}
                >
                  Become a Manager
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
