"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAppSelector } from "@/state/redux";
import { useGetContractorsQuery } from "@/state/api";
import { Contractor } from "@/types/prismaTypes";
import Loading from "@/components/Loading";
import Header from "@/components/Header";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
const Map = () => {
  const mapContainerRef = useRef(null);
  const filters = useAppSelector((state) => state.global.filters);
  const {
    data: contractors,
    isLoading,
    isError,
  } = useGetContractorsQuery(filters);

  useEffect(() => {
    if (isLoading || isError || !contractors) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/archanme1/cma83196800ez01s7h692ba5s",
      center: filters.coordinates || [-79.383555, 43.647938],
      zoom: 9,
    });

    contractors.forEach((contractor) => {
      const marker = createContractorMarker(contractor, map);
      const markerElement = marker.getElement();
      const path = markerElement.querySelector("path[fill='#3FB1CE']");
      if (path) path.setAttribute("fill", "#000000");
    });

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700);
    };
    resizeMap();

    return () => map.remove();
  }, [isLoading, isError, contractors, filters.coordinates]);

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
    <div className="basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
};

const createContractorMarker = (contractor: Contractor, map: mapboxgl.Map) => {
  const marker = new mapboxgl.Marker()
    .setLngLat([
      contractor.location.coordinates.longitude,
      contractor.location.coordinates.latitude,
    ])
    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image">
          </div>
          <div>
            <a href="/search/${contractor.id}" target="_blank" class="marker-popup-title">${contractor.name}</a>
            <p class="marker-popup-price">
              $${contractor.installationFee}
              <span class="marker-popup-price-unit"> / install</span>
            </p>
          </div>
        </div>
        `
      )
    )
    .addTo(map);
  return marker;
};

export default Map;
