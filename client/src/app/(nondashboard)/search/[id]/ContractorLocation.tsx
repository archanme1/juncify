import React, { useEffect, useRef } from "react";
import { Compass, MapPin } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGetContractorQuery } from "@/state/api";
import Loading from "@/components/Loading";
import Header from "@/components/Header";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const ContractorLocation = ({ contractorId }: ContractorDetailsProps) => {
  const {
    data: contractor,
    isError,
    isLoading,
  } = useGetContractorQuery(contractorId);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (isLoading || isError || !contractor) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
      center: [
        contractor.location.coordinates.longitude,
        contractor.location.coordinates.latitude,
      ],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([
        contractor.location.coordinates.longitude,
        contractor.location.coordinates.latitude,
      ])
      .addTo(map);

    const markerElement = marker.getElement();
    const path = markerElement.querySelector("path[fill='#3FB1CE']");
    if (path) path.setAttribute("fill", "#000000");

    return () => map.remove();
  }, [contractor, isError, isLoading]);

  if (isLoading) return <Loading />;
  if (isError || !contractor) {
    return (
      <div className="dashboard-container">
        <Header
          title="Something went wrong!"
          subtitle="Error Fetching Contractor"
        />
      </div>
    );
  }

  return (
    <div className="py-8">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>
      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Address:
          <span className="ml-2 font-semibold text-gray-700">
            {contractor.location?.address || "Address not available"}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            contractor.location?.address || "",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  );
};

export default ContractorLocation;
