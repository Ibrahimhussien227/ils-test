import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  useMapEvent,
} from "react-leaflet";
import { useSelector } from "react-redux";

import { selectRoute } from "../selectors/routeSelector";
import AutoFitBound from "./AutoFitBound";
import Marker from "./Marker";

const Map = ({ center, zoom }) => {
  const route = useSelector(selectRoute);
  const [points, setPoints] = useState([]);
  const [originMarker, setOriginMarker] = useState(null);
  const [destinationMarker, setDestinationMarker] = useState(null);
  const [bounds, setBounds] = useState([]);

  const MapEvents = () => {
    useMapEvent("click", (e) => {
      console.log(e.latlng);
    });
    return null;
  };

  useEffect(() => {
    if (route) {
      const points = route.routes[0].geometry.coordinates.map((arr) => [
        arr[1],
        arr[0],
      ]);
      setPoints(points);
      const originPoint = { lat: points[0][0], lng: points[0][1] };
      const destinationPoint = {
        lat: points[points.length - 1][0],
        lng: points[points.length - 1][1],
      };
      setOriginMarker(originPoint);
      setDestinationMarker(destinationPoint);
      const newBounds = [originPoint, destinationPoint].map((m) => [
        m.lat,
        m.lng,
      ]);
      setBounds(newBounds);
    }
  }, [route]);

  const handleSetBounds = (bounds) => {
    setBounds(bounds);
  };

  return (
    <MapContainer bounds={bounds} center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />

      <Polyline color={"blue"} opacity={1} weight={8} positions={points}>
        <Popup>Polygon</Popup>
      </Polyline>

      {originMarker && <Marker position={originMarker} text="loading" />}

      {destinationMarker && (
        <Marker position={destinationMarker} text="loading" />
      )}

      <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />
    </MapContainer>
  );
};

export default Map;
