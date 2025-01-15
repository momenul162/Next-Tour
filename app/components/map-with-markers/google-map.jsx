"use client";

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import { Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";

const CustomGoogleMap = ({
  zoom = 2,
  center = [25.276987, 55.296249],
  touristLocations = null,
  trackPosition = null,
  height = "450px",
}) => {
  return (
    <MapContainer
      key={zoom}
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: `${height}`, width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="topright" />

      {touristLocations &&
        touristLocations.map((location, index) => (
          <Marker key={location.id || `${location.name}-${index}`} position={location.position}>
            <Popup>
              <Typography variant="h5" fontWeight="bold">
                {location.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {location.description}
              </Typography>
            </Popup>
          </Marker>
        ))}

      {trackPosition && (
        <Marker position={trackPosition}>
          <Popup>Your choice is Beautiful</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default CustomGoogleMap;
