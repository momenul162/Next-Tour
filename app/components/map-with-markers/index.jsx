"use client";

import usePlaces from "@/app/hooks/usePlaces";
import { Box, Container, Typography } from "@mui/material";
import CustomGoogleMap from "./google-map";

// Sample data for tourist locations

export const MapWithMarkers = () => {
  const { data, error } = usePlaces();

  const locations = data?.map(({ name, position, description }) => ({
    name,
    position,
    description,
  }));

  return (
    <Container maxWidth="xl" sx={{ my: 10 }} id="highlights">
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography>Modern & Beautiful</Typography>
        <Typography sx={{ fontSize: { xs: 25, md: 40, xl: 55 }, fontWeight: 500, lineHeight: 1 }}>
          Explore the World fo Travel
        </Typography>
      </Box>
      <CustomGoogleMap touristLocations={locations} />
    </Container>
  );
};
