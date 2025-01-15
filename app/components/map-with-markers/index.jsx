"use client";

import usePlaces from "@/app/hooks/usePlaces";
import { Box, Container, Typography } from "@mui/material";
// import CustomGoogleMap from "./google-map";
import dynamic from "next/dynamic";

export const MapWithMarkers = () => {
  const { data } = usePlaces();

  const locations = data?.map(
    ({ name, position, description }) =>
      ({
        name,
        position,
        description,
      } || [])
  );

  const CustomGoogleMap = dynamic(() => import("./google-map.jsx"), { ssr: false });

  return (
    <Container maxWidth="xl" sx={{ my: 10 }} id="highlights">
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography>Modern & Beautiful</Typography>
        <Typography sx={{ fontSize: { xs: 20, md: 35, xl: 42 }, fontWeight: 500, lineHeight: 1 }}>
          Explore the World fo Travel
        </Typography>
      </Box>
      <CustomGoogleMap touristLocations={locations} />
    </Container>
  );
};
