import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getJunctionById,
  getRelatedJunctionsByCategory,
} from "@/lib/actions/junction.actions";
import { getOrdersByJunction } from "@/lib/actions/order.actions";
import { IOrderItem } from "@/lib/database/models/order.model";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const junction = await getJunctionById(id);

  return {
    title: junction.title,
    description: junction.description,
  };
};

const JunctionDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const junction = await getJunctionById(id);
  const page = Number(searchParams?.page) || 1;

  const relatedJunctions = await getRelatedJunctionsByCategory({
    categoryId: junction?.category?._id,
    junctionId: junction?._id,
    page,
  });

  const orders = await getOrdersByJunction({
    junctionId: junction._id,
    searchString: "",
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <div className="grid-item">
            <Image
              src={junction?.imageUrl}
              alt="hero image"
              width={1000}
              height={1000}
              className="h-full min-h-[300px] object-cover object-center"
            />
          </div>

          <div className="grid-item flex w-full flex-col gap-5 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h3 className="h3-bold text-grey-600 ">{junction?.title}</h3>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <p className="p-semibold-20 rounded-xl bg-red-500/10 px-5 py-3 text-red-500">
                    {junction?.isFree || junction?.price === ""
                      ? "FREE"
                      : `$${junction?.price}`}
                  </p>
                  <CheckoutButton junction={junction} />
                </div>
              </div>
            </div>

            <p className="p-medium-20 ml-2 mt-2 sm:mt-0">
              by{" "}
              <span className="text-red-500">
                {junction?.organizer.firstName.toUpperCase()}{" "}
                {junction?.organizer.lastName.toUpperCase()}
              </span>
            </p>

            <p className="p-semibold-18 rounded-xl bg-blue-500/10 px-4 py-2.5 text-blue-500 w-max">
              {junction?.category?.name?.toUpperCase()}
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={24}
                  height={24}
                />
                <div className="p-medium-14 lg:p-regular-18 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(junction?.startDateTime).dateOnly} -{" "}
                    {formatDateTime(junction?.startDateTime).timeOnly}
                  </p>
                  <p>_</p>
                  <p>
                    {formatDateTime(junction?.endDateTime).dateOnly} -{" "}
                    {formatDateTime(junction?.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                />
                <p className="p-medium-14 lg:p-regular-16">
                  {junction?.city?.name?.toUpperCase()}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-semibold-18 text-grey-600">Brief Intro:</p>
              <p className="p-medium-14 lg:p-regular-16">
                {junction?.description}
              </p>
              <p className="p-semibold-18 text-grey-600 mt-1">
                Additional Info:
              </p>
              <p className="p-medium-14 lg:p-regular-16 text-blue-500 underline">
                {junction?.url}
              </p>
            </div>

            {orders.length >= 0 && (
              <div className="flex flex-col gap-2">
                <p className="p-bold-20 text-grey-600">Joinee:</p>
                <div className="flex flex-wrap">
                  {orders.map((order: IOrderItem) => (
                    <Image
                      src={order.buyerProfile || "/assets/images/profile.png"}
                      alt="Profile Image"
                      width={22}
                      height={22}
                      className="rounded-xl"
                      key={order._id}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* JUNCTIONS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Junctions</h2>

        <Collection
          data={relatedJunctions?.data}
          emptyTitle="No Junction Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Junctions"
          limit={3}
          page={page}
          totalPages={relatedJunctions?.totalPages}
        />
      </section>
    </>
  );
};

export default JunctionDetails;
