"use client";
import React from "react";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetContractorsQuery,
  useGetCustomerQuery,
} from "@/state/api";
import Header from "@/components/Header";

const Favorites = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: tenant } = useGetCustomerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );

  const {
    data: favoriteContractors,
    isLoading,
    error,
  } = useGetContractorsQuery(
    { favoriteIds: tenant?.favorites?.map((fav: { id: number }) => fav.id) },
    { skip: !tenant?.favorites || tenant?.favorites.length === 0 }
  );

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error loading your favroites or liked contractors."
        />
      </div>
    );

  return (
    <div className="dashboard-container">
      <Header
        title="Favorited Contractors"
        subtitle="Browse and manage your saved contractors"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteContractors?.map((contractor) => (
          <Card
            key={contractor.id}
            contractor={contractor}
            isFavorite={true}
            onFavoriteToggle={() => {}}
            showFavoriteButton={false}
            contractorLink={`/search/${contractor.id}`}
          />
        ))}
      </div>
      {(!favoriteContractors || favoriteContractors.length === 0) && (
        <p>You don&lsquo;t have any liked or favorite contractors</p>
      )}
    </div>
  );
};

export default Favorites;
