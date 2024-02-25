import Link from "next/link";
import { Metadata } from "next";

import CategoryFilter from "@/components/shared/CategoryFilter";
import CityFilter from "@/components/shared/CityFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import { getAllJunctions } from "@/lib/actions/junction.actions";

export const metadata: Metadata = {
  title: "All Junctions",
  description:
    "Explore all the junctions and events happening around you with juncify. Find the best junctions and events in your city.",
};

const AllJunction = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const city = (searchParams?.city as string) || "";

  const junctions = await getAllJunctions({
    query: searchText,
    category: category,
    city: city,
    page,
    limit: 12,
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
        id="junctions"
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
          data={junctions?.data}
          emptyTitle="No Junctions Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Junctions"
          limit={9}
          page={page}
          totalPages={junctions?.totalPages}
        />
      </section>
    </>
  );
};

export default AllJunction;