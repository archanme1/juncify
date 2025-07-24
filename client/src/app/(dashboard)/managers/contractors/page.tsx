"use client";

import React from "react";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetManagerContractorsQuery,
} from "@/state/api";
import Card from "@/components/Card";

const ContractorsPage = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: managerContractors,
    isLoading,
    error,
  } = useGetManagerContractorsQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error loading your contractors"
        />
      </div>
    );
  return (
    <div className="dashboard-container">
      <Header
        title="My Contractors"
        subtitle="View and manage your contractors"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {managerContractors?.map((contractor) => (
          <Card
            key={contractor.id}
            contractor={contractor}
            isFavorite={false}
            onFavoriteToggle={() => {}}                 
            showFavoriteButton={false}
            contractorLink={`/managers/contractors/${contractor.id}`}
          />
        ))}
      </div>
      {(!managerContractors || managerContractors.length === 0) && (
        <p>You don&lsquo;t manage any contractors</p>
      )}
    </div>
  );
};

export default ContractorsPage;
