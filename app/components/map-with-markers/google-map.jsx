import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";

export default function CustomGoogleMap({
  zoom = 3,
  center = [25.276987, 55.296249],
  touristLocations = null,
  trackPosition = null,
  height = "450px",
}) {
  return (
    <>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: `${height}`, width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {touristLocations &&
          touristLocations.map((location) => (
            <Marker position={location.position}>
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
    </>
  );
}
