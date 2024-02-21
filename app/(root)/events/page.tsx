import Link from "next/link";
import { Metadata } from "next";

import CategoryFilter from "@/components/shared/CategoryFilter";
import CityFilter from "@/components/shared/CityFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import { getAllEvents } from "@/lib/actions/event.actions";

export const metadata: Metadata = {
  title: "Juncify - All Junctions",
  description:
    "Explore all the junctions and events happening around you. Find the best junctions and events in your city.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

const AllJunction = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const city = (searchParams?.city as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    city: city,
    page,
    limit: 6,
  });

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Explore</h3>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className=" w-full flex flex-col gap-3">
          <Search placeholder="Search by title..." />
          <div className=" w-full flex flex-col gap-5 md:flex-row">
            <CategoryFilter />
            <CityFilter />
          </div>
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Junctions Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={9}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
};

export default AllJunction;
