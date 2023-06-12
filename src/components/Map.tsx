import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { AddressMap } from "@/types/types";

interface Props {
  data: AddressMap[],
  handleCLick: (index: number) =>  void,
}

const Map = ({ data, handleCLick }: Props) => {

  const coordinates = data.map((item) =>
    item.attributes.coordinates.split(',')
  )

  function calcMapCenter(array:string[][]){
    const Lang = array.map(item => +item[0]).reduce((a, b) => a + b, 0) / array.length;
    const Ing = array.map(item => +item[1]).reduce((a, b) => a + b, 0) / array.length;

    return [Lang, Ing];
  }

  const center = calcMapCenter(coordinates);

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
      {data.map((item, index) =>
        <Marker
          attribution={`${index}`}
          key={item.attributes.coordinates}
          position={item.attributes.coordinates.split(',') as unknown as LatLngExpression}
          icon={myIcon}
          eventHandlers={{
            click: (e) => {
              handleCLick(e.target.options.attribution)
            },
          }}
        >
        </Marker>
      )}
    </MapContainer>
  )
}

export default Map;

