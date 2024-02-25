import React from "react";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs";

import Collection from "@/components/shared/Collection";
import { getJunctionsByUser } from "@/lib/actions/junction.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";

export const metadata: Metadata = {
  title: "My Junctions",
  description:
    "See Joined and Organized junctions and events happening around you with juncify. Find the best junctions and events in your city.",
};

const ProfilePage = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const junctionsPage = Number(searchParams?.junctionsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedJunctions =
    orders?.data.map((order: IOrder) => order.junction) || [];
  const organizedJunctions = await getJunctionsByUser({
    userId,
    page: junctionsPage,
  });

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Joined</h3>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={orderedJunctions}
          emptyTitle="Not involved yet?"
          emptyStateSubtext="No worries - Plenty of exciting junctions to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

      {/* Junctions Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Organized</h3>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedJunctions?.data}
          emptyTitle="Create now?"
          emptyStateSubtext="Create a junction and start something new!"
          collectionType="Junctions_Organized"
          limit={3}
          page={junctionsPage}
          urlParamName="junctionsPage"
          totalPages={organizedJunctions?.totalPages}
        />
      </section>
    </>
  );
};

export default ProfilePage;
