import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { getOrdersByEvent } from "@/lib/actions/order.actions";
import { IOrderItem } from "@/lib/database/models/order.model";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const event = await getEventById(id);

  return {
    title: event.title,
    description: event.description,
  };
};

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event?.category._id,
    eventId: event?._id,
    page: searchParams.page as string,
  });

  const orders = await getOrdersByEvent({
    eventId: event._id,
    searchString: "",
  });

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={event?.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />

          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{event?.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-semibold-20 rounded-full bg-red-500/10 px-5 py-2 text-red-500">
                    {event?.isFree ? "FREE" : `$${event?.price}`}
                  </p>
                  <p className="p-semibold-20 rounded-full bg-blue-500/10 px-4 py-2.5 text-blue-500">
                    {(event?.category.name).toUpperCase()}
                  </p>
                </div>

                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-red-500">
                    {event?.organizer.firstName.toUpperCase()}{" "}
                    {event?.organizer.lastName.toUpperCase()}
                  </span>
                </p>
              </div>
            </div>

            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>
                    {formatDateTime(event?.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event?.startDateTime).timeOnly}
                  </p>
                  <p> - </p>
                  <p>
                    {formatDateTime(event?.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event?.endDateTime).timeOnly}
                  </p>
                </div>
              </div>

              <div className="p-regular-20 flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <p className="p-medium-16 lg:p-regular-20">{event?.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
              <p className="p-medium-16 lg:p-regular-18">
                {event?.description}
              </p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-red-500 underline">
                {event?.url}
              </p>
            </div>

            {orders.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="p-bold-20 text-grey-600">Joinee:</p>
                <div className="flex flex-wrap">
                  {orders.map((order: IOrderItem) => (
                    <Image
                      src={order.buyerProfile || "/assets/images/profile.png"}
                      alt="Profile Image"
                      width={22}
                      height={22}
                      className="rounded-full"
                      key={order._id}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EVENTS with the same category */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
