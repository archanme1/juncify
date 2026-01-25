import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetContractorQuery } from "@/state/api";
import { MapPin } from "lucide-react";
import React from "react";

const ContractorOverview = ({ contractorId }: ContractorOverviewProps) => {
  const {
    data: contractor,
    isError,
    isLoading,
  } = useGetContractorQuery(contractorId);

  if (isLoading) return <Loading />;
  if (isError || !contractor) {
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error Fetching Contractor"
        />
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        {/* <div className="text-sm text-gray-500 mb-1">
          {contractor.location?.country} / {contractor.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {contractor.location?.city}
          </span>
        </div> */}
        <h1 className="text-3xl font-bold my-5">{contractor.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {contractor.location?.city}, {contractor.location?.state},{" "}
            {contractor.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              {/* <Star className="w-4 h-4 mr-1 fill-current" /> */}
              {/* {contractor.averageRating.toFixed(1)} */}(
              {contractor.numberOfReviews} Views)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Hourly Rate</div>
            <div className="font-semibold">
              ${contractor.hourlyRate.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Team Size</div>
            <div className="font-semibold">{contractor.teamSize}</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">
              Service Area Coverage (*1000km)
            </div>
            <div className="font-semibold">
              {contractor.serviceAreaCoverage}km
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Years of Experience</div>
            <div className="font-semibold">
              {contractor.yearsOfExperience.toLocaleString()}yrs
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {contractor.name}</h2>
        <p className="text-gray-500 leading-7">
          {contractor.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          repellendus enim atque deleniti consectetur quia, sequi id, in
          perspiciatis illo accusamus non nulla, optio dolorem! Nam
          reprehenderit quaerat praesentium placeat.
        </p>
      </div>
    </div>
  );
};

export default ContractorOverview;
