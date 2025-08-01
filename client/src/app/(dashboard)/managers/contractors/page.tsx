"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetManagerContractorsQuery,
} from "@/state/api";
import Card from "@/components/Card";
import DeleteApplicationModal from "./DeleteApplicationModal";

const ContractorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContractorId, setSelectedContractorId] = useState<number | null>(null);

  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: managerContractors,
    isLoading,
    error,
  } = useGetManagerContractorsQuery(authUser?.cognitoInfo?.userId || "", {
    skip: !authUser?.cognitoInfo?.userId,
  });

  const userType = authUser?.userRole.toLowerCase() ?? "";
  const isManager = userType === "manager";

  const handleDeleteClick = (contractorId: number) => {
    if (!authUser) return;
    setSelectedContractorId(contractorId);
    setIsModalOpen(true);
  };

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
            isManager={isManager}
            contractor={contractor}
            isFavorite={false}
            onFavoriteToggle={() => {}}
            onHandleDelete={() => handleDeleteClick(contractor.id)}
            showFavoriteButton={false}
            contractorLink={`/managers/contractors/${contractor.id}`}
          />
        ))}
      </div>

      {(!managerContractors || managerContractors.length === 0) && (
        <p>You don’t manage any contractors</p>
      )}

      {/* Render a single global modal */}
      {selectedContractorId !== null && (
        <DeleteApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedContractorId(null);
          }}
          contractorId={selectedContractorId}
        />
      )}
    </div>
  );
};

export default ContractorsPage;
