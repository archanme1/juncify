"use client";

import Card from "@/components/Card";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetServiceRecordsQuery,
  useGetCustomerQuery,
} from "@/state/api";
import React from "react";

const Residences = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: customer } = useGetCustomerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: serviceRecords,
    isLoading,
    error,
  } = useGetServiceRecordsQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error loading your service records"
        />
      </div>
    );

  return (
    <div className="dashboard-container">
      <Header
        title="Current or past Service Records"
        subtitle="View and manage your current or past service records"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {serviceRecords?.map((serviceRecord) => (
          <Card
            key={serviceRecord.id}
            contractor={serviceRecord}
            isFavorite={customer?.favorites.includes(serviceRecord.id) || false}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            contractorLink={`/customers/servicerecords/${serviceRecord.id}`}
          />
        ))}
      </div>
      {(!serviceRecords || serviceRecords.length === 0) && (
        <p>You don&lsquo;t have any service records</p>
      )}
    </div>
  );
};

export default Residences;
