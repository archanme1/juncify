import Image from "next/image";
import Link from "next/link";

import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Your Gatherings,
              <br /> Our Stage!
            </h1>
            <p className="p-regular-16 md:p-regular-20 ">
              Your junction take center stage with Juncify, creating moments
              that resonate and memories that last.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="lg" asChild className="button w-full sm:w-fit">
                <Link href="#events">Explore Junctions</Link>
              </Button>
              <Button asChild size="lg" className="button w-full sm:w-fit">
                <Link href="/events/create">Create New Event</Link>
              </Button>
            </div>
          </div>

          <Image
            src="/assets/images/newlogo.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        {/* maybe we can use sponsors here later */}
        {/* <h3 className="h2-bold">
          Trust by <br /> List of Sponsors in Carousel
        </h3> */}

        <div className=" w-full flex flex-col gap-5 md:flex-row">
          <Search placeholder="Search Junctions >= 3 letters..." />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
