"use client";

import ApplicationCard from "@/components/ApplicaionsCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useGetApplicationsQuery, useGetAuthUserQuery } from "@/state/api";
import { CircleCheckBig, Clock, Download, XCircle } from "lucide-react";
import React from "react";

const Applications = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: applications,
    isLoading,
    isError,
  } = useGetApplicationsQuery({
    userId: authUser?.cognitoInfo?.userId,
    userType: "customer",
  });

  if (isLoading) return <Loading />;
  if (isError || !applications) return <div>Error fetching applications</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Applications"
        subtitle="Track and manage your contractor's applications"
      />
      <div className="w-full">
        {applications?.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            userType="customer"
          >
            <div className="flex justify-between gap-5 w-full pb-4 px-4">
              {application.status === "Approved" ? (
                <div className="bg-green-100 p-4 text-green-700 grow flex items-center">
                  <CircleCheckBig className="w-5 h-5 mr-2" />
                  The contractor is being booked by you on{" "}
                  {new Date(
                    application.booking?.startDate
                  ).toLocaleDateString()}
                </div>
              ) : application.status === "Pending" ? (
                <div className="bg-yellow-100 p-4 text-yellow-700 grow flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Your application is pending approval
                </div>
              ) : (
                <div className="bg-red-100 p-4 text-red-700 grow flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Your application has been denied
                </div>
              )}

              <button
                className={`cursor-not-allowed bg-secondary-500  py-2 px-4 text-primary-50
                          rounded-md flex items-center justify-cente `}
              >
                <Download className="w-5 h-5 mr-2 " />
                Download Agreement (N/A)
              </button>
            </div>
          </ApplicationCard>
        ))}
      </div>
    </div>
  );
};

export default Applications;
