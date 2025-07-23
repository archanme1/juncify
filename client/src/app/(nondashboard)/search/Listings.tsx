import Card from "@/components/Card";
import CardCompact from "@/components/CardCompact";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useAddFavoriteContractorMutation,
  useGetAuthUserQuery,
  useGetContractorsQuery,
  useGetCustomerQuery,
  useRemoveFavoriteContractorMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { Contractor } from "@/types/prismaTypes";
import React from "react";

const Listings = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: customer } = useGetCustomerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  const [addFavorite] = useAddFavoriteContractorMutation();
  const [removeFavorite] = useRemoveFavoriteContractorMutation();
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const filters = useAppSelector((state) => state.global.filters);

  const {
    data: contractors,
    isLoading,
    isError,
  } = useGetContractorsQuery(filters);

  const handleFavoriteToggle = async (contractorId: number) => {
    if (!authUser) return;

    const isFavorite = customer?.favorites?.some(
      (fav: Contractor) => fav.id === contractorId
    );

    if (isFavorite) {
      await removeFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        contractorId,
      });
    } else {
      await addFavorite({
        cognitoId: authUser.cognitoInfo.userId,
        contractorId,
      });
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !contractors)
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error Fetching Contractors"
        />
      </div>
    );

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {contractors.length}{" "}
        <span className="text-gray-700 font-normal">
          Places in {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {contractors?.map((contractor) =>
            viewMode === "grid" ? (
              <Card
                key={contractor.id}
                contractor={contractor}
                isFavorite={
                  customer?.favorites?.some(
                    (fav: Contractor) => fav.id === contractor.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(contractor.id)}
                showFavoriteButton={!!authUser}
                contractorLink={`/search/${contractor.id}`}
              />
            ) : (
              <CardCompact
                key={contractor.id}
                contractor={contractor}
                isFavorite={
                  customer?.favorites?.some(
                    (fav: Contractor) => fav.id === contractor.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(contractor.id)}
                showFavoriteButton={!!authUser}
                contractorLink={`/search/${contractor.id}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
