import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Heart, Star, Users } from "lucide-react";

const CardCompact = ({
  contractor,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  contractorLink,
}: CardCompactProps) => {
  const [imgSrc, setImgSrc] = useState(
    contractor.photoUrls?.[0] || "/landing-splash.jpg"
  );

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={contractor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/landing-splash.jpg")}
        />
        <div className="absolute bottom-2 left-2 flex gap-1 flex-col">
          {contractor.isEmergencyAvailable && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit">
              Emergency Call
            </span>
          )}
          {contractor.offersOnSiteParking && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Site Parking
            </span>
          )}
        </div>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-1">
              {contractorLink ? (
                <Link
                  href={contractorLink}
                  className="hover:underline hover:text-blue-600"
                  scroll={false}
                >
                  {contractor.name}
                </Link>
              ) : (
                contractor.name
              )}
            </h2>
            {showFavoriteButton && (
              <button
                className="bg-white rounded-full p-1"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>
          <p className="text-gray-600 mb-1 text-sm">
            {contractor?.location?.address}, {contractor?.location?.city}
          </p>
          <div className="flex text-sm items-center">
            {/* <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {contractor.averageRating.toFixed(1)}
            </span> */}
            <span className="text-gray-600 ml-1">
              ({contractor.numberOfReviews} Views)
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2 text-gray-600">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {contractor.teamSize}
            </span>
            {/* <span className="flex items-center">
              <LandPlot className="w-4 h-4 mr-1" />
              {contractor.serviceAreaCoverage} *1000km area
            </span> */}
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {contractor.yearsOfExperience} yrs
            </span>
          </div>

          <p className="text-base font-bold">
            ${contractor.installationFee.toFixed(0)}
            <span className="text-gray-600 text-xs font-normal"> /install</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCompact;
