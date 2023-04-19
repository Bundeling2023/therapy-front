import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { AddressMap } from "@/types/types";

interface Props {
  data: AddressMap[],
}

const Map = ({ data }: Props) => {

  const coordinates = data.map((item) =>{
    item.coordinates.split(',');
  })

  console.log(coordinates);

  // const bounds:any = [];

  // data.map((item) => {
  //   bounds.push(item.coordinates.split(','))
  // })


  const myIcon = new L.Icon({
    iconUrl: "/map_marker.svg",
    iconRetinaUrl: "/map_marker.svg",
    iconSize: [75, 50],
  });
  return (
    <MapContainer
      zoom={7}
      center={[50.9508, 5.9774]}
      // bounds={text as unknown as LatLngBounds}
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
            {item.description}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}

export default Map;
function useLeafletContext() {
  throw new Error("Function not implemented.");
}

