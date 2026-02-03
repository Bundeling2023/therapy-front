"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import L, { LatLngExpression } from "leaflet";
import { AddressMap } from "@/types/types";

interface Props {
  data: AddressMap[];
  handleCLick: (index: number) => void;
}

// Dynamically import MapContainer with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Map = ({ data, handleCLick }: Props) => {
  const mapRef = useRef<L.Map | null>(null);

  const coordinates = data.map((item) =>
    item.coordinates.split(",").map(Number)
  );

  function calcMapCenter(array: number[][]) {
    const lat =
      array.map((item) => item[0]).reduce((a, b) => a + b, 0) / array.length;
    const lng =
      array.map((item) => item[1]).reduce((a, b) => a + b, 0) / array.length;
    return [lat, lng] as LatLngExpression;
  }

  const center = calcMapCenter(coordinates);

  const myIcon = new L.Icon({
    iconUrl: "/map_marker.svg",
    iconRetinaUrl: "/map_marker.svg",
    iconSize: [75, 50],
  });

  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        className="w-full h-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((item, index) => {
          const [lat, lng] = item.coordinates
            .split(",")
            .map(Number);
          return (
            <Marker
              key={index}
              position={[lat, lng] as LatLngExpression}
              icon={myIcon}
              eventHandlers={{
                click: () => handleCLick(index),
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
