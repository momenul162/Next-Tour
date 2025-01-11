"use client";

import React from "react";
import { Box, Typography, Button, ButtonGroup, IconButton, Container, Chip } from "@mui/material";
import usePlaces from "../hooks/usePlaces";
import { useParams } from "next/navigation";
import { AccessTime } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import DescriptionTable from "../components/tour-details/table";
import BookingForm from "../components/tour-details/booking";
import PhotoGallery from "../components/tour-details/gallary";
import Banner from "../components/tour-details/banner";
import TourPlan from "../components/tour-details/tour-plan";
import { MapSharp } from "@mui/icons-material";
import FaceIcon from "@mui/icons-material/Face";
import CustomGoogleMap from "../components/map-with-markers/google-map";

const TourDetails = () => {
  const { data, error } = usePlaces();
  const { id } = useParams();

  const place = data?.find((p) => p.id === id);
  if (!place) {
    return;
  }

  return (
    <Container>
      <Box>
        <Banner image={place.image} />
      </Box>
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "space-evenly",
          mt: 26,
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography color="#FF6A3D" variant="h3" fontWeight="bold">
            {place?.name}
          </Typography>
          <Typography variant="h6" color="secondary">
            <Chip
              color="secondary"
              sx={{ color: "white", fontWeight: 700 }}
              icon={<FaceIcon />}
              label={`${place?.averageCostPerDay} / per day`}
            />
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ boxShadow: "0px 4px 10px rgba(225, 135, 105, 0.5)", mt: 2 }}
          >
            Pay for Booking
          </Button>
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" fontWeight="bold">
              Overview
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
              {place?.description}
            </Typography>

            {/* Button group */}
            <Box textAlign={"center"}>
              <ButtonGroup fullWidth size="large" color="text.info">
                <Button>
                  <IconButton>
                    <AccessTime sx={{ color: "#FF6A3D" }} />
                  </IconButton>
                  {place?.recommendedDuration} Days
                </Button>
                <Button>
                  <IconButton>
                    <Person sx={{ color: "#FF6A3D" }} />
                  </IconButton>
                  Age 16+
                </Button>
                <Button>
                  <IconButton>
                    <MapSharp sx={{ color: "#FF6A3D" }} />
                  </IconButton>
                  {place?.name}
                </Button>
              </ButtonGroup>
            </Box>
            <DescriptionTable name={place.name} />
          </Box>
        </Box>

        {/* Booking Form */}
        <BookingForm />
      </Box>

      {/* tour plans */}
      <TourPlan localPlace={place.activities} />

      {/* Track location */}
      <CustomGoogleMap
        zoom={10}
        height="400px"
        center={place.position}
        trackPosition={place.position}
      />

      {/* Photo Gallery */}
      <PhotoGallery images={place.images} />
    </Container>
  );
};

export default TourDetails;
