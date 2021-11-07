import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";
import { BasemapLayer, FeatureLayer } from "react-esri-leaflet";
import React from "react";

const MapView: React.FC = () => {
  const position: LatLngExpression = [59.91174, 10.75042];
  const zoom: number = 15;
  return (
    <MapContainer center={position} zoom={zoom}>
      <BasemapLayer name="DarkGray" />
    </MapContainer>
  );
};

export default MapView;
