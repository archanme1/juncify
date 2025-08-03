"use client";

import { useGetAuthUserQuery } from "@/state/api";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ImagePreviews from "./ImagePreviews";
import ContractorOverview from "./ContractorOverview";
import ContractorDetails from "./ContractorDetails";
import Contact from "./Contact";
import ContractorLocation from "./ContractorLocation";
import ApplicationModal from "./ApplicationModal";

const SingleListing = () => {
  const { id } = useParams();
  const contractorId = Number(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: authUser } = useGetAuthUserQuery();

  return (
    <div>
      <ImagePreviews images={["/landing-splash.jpg", "/landing-splasha.jpg"]} />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <ContractorOverview contractorId={contractorId} />
          <ContractorDetails contractorId={contractorId} />
        </div>

        <div className="order-1 md:order-2">
          <ContractorLocation contractorId={contractorId} />
          <Contact onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>

      {authUser && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contractorId={contractorId}
        />
      )}
    </div>
  );
};

export default SingleListing;
