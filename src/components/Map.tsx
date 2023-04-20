import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { AddressMap } from "@/types/types";
import HTMLReactParser from "html-react-parser";

interface Props {
  data: AddressMap[],
}

const Map = ({ data }: Props) => {

  const coordinates = data.map((item) =>
    item.coordinates.split(',')
  )

  function calcMapCenter(array:string[][]){
    const Lang = array.map(item => +item[0]).reduce((a, b) => a + b, 0) / array.length;
    const Ing = array.map(item => +item[1]).reduce((a, b) => a + b, 0) / array.length;

    return [Lang, Ing];
  }

  const center = calcMapCenter(coordinates);
  // const parse = require('html-react-parser');

  const myIcon = new L.Icon({
    iconUrl: "/map_marker.svg",
    iconRetinaUrl: "/map_marker.svg",
    iconSize: [75, 50],
  });

  return (
    <MapContainer
      zoom={13}
      center={center as unknown as LatLngExpression}
      attributionControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) =>
        <Marker
          key={item.coordinates}
          position={item.coordinates.split(',') as unknown as LatLngExpression}
          icon={myIcon}
        >
          <Popup>
            {HTMLReactParser(item.description)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default Map;

