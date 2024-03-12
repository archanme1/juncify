import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllJunctions } from "@/lib/actions/junction.actions";
import { SearchParamProps } from "@/types";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const city = (searchParams?.city as string) || "";

  const junctions = await getAllJunctions({
    query: searchText,
    category: category,
    city: city,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 z-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h2 className="h2-bold">
              Your Gatherings,
              <br /> Our Stage!
            </h2>
            <p className="p-regular-16 md:p-regular-20 ">
              Neighborhood hotspot, backyard affair and get-togethers to create
              an unbeatable fusion of fun!{" "}
              <i className="font-semibold">
                {" "}
                Plus, offer your unique services from your chosen location to
                earn extra income!
              </i>
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-5">
        <Button size="lg" asChild className="button w-full sm:w-fit">
          <Link href="#junctions">See Recent Junction</Link>
        </Button>
      </div> */}
          </div>

          <div className="relative max-h-[50vh] md:max-h-[60vh] ">
            <Image
              src="/assets/images/newlogo.png"
              alt="hero"
              width={1000}
              height={1000}
              className="max-h-full object-contain object-center transition-transform duration-300 transform-gpu hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section
        id="junctions"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        {/* maybe we can use sponsors here later */}
        {/* <h3 className="h2-bold">
          Trust by <br /> List of Sponsors in Carousel
        </h3> */}

        <div className=" w-full flex flex-col gap-5 md:flex-row">
          <Search placeholder="Search by title..." />
        </div>

        <Collection
          data={junctions?.data}
          emptyTitle="No Junctions Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Junctions"
          limit={6}
          page={page}
          totalPages={junctions?.totalPages}
        />
      </section>

      <div className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
          <h3 className="h3-bold">Join & Engage</h3>
          <p className="p-regular-16">
            Where you can create or join a junction, have fun, throw parties,
            play sports, go hiking, and explore endless adventures together!
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <SignedIn>
              <Button asChild size="lg" className="button w-full sm:w-fit">
                <Link href="/junctions/create">Create Junction</Link>
              </Button>
              <Button asChild size="lg" className="button w-full sm:w-fit">
                <Link href="/junctions">Explore Junction</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-xl" size="lg">
                <Link href="/sign-in">Sign In to Engage</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
}
