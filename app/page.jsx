import { Box, Button, Grid, Skeleton, TextField, Typography } from "@mui/material";
import Reviews from "./components/review-slider";
import TouristArea from "./components/tourist-area";
import { BgVideo } from "./components/bg-video";
import { Suspense } from "react";
import { MapWithMarkers } from "./components/map-with-markers";

export default function Home() {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: { xs: "280px", md: "500px", lg: "700px" },
          }}
          alt="The house from the offer."
          src="bg-banner.jpg"
        />
        <Box
          sx={{
            position: "absolute",
            top: { xs: "65%", md: "50%" },
            left: "35%",
            transform: "translate(-50%, -50%)",
            color: "black",
            textAlign: "start",
          }}
        >
          <Typography sx={{ fontSize: { xs: 25, md: 40, xl: 55 }, fontWeight: 500 }}>
            Explore Your Travel
          </Typography>
          <Typography>
            Discover your next great adventure, become an explorer to get started!
          </Typography>
        </Box>
      </Box>

      {/* Form */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
          top: "-50px",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Where To Field */}
          <Grid item xs={12} md={3}>
            <TextField
              label="Where to?"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* When Field */}
          <Grid item xs={12} md={3}>
            <TextField
              label="When"
              type="date"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Select Type Field */}
          <Grid item xs={12} md={3}>
            <TextField
              label="Choose..."
              select
              variant="outlined"
              fullWidth
              // onChange={(e) => e.target.value}
              sx={{ backgroundColor: "white" }}
            >
              <option disabled value="">
                Select type
              </option>
              <option value="adventure">Adventure Tours</option>
              <option value="relaxation">City Tours</option>
              <option value="cultural">Couple Tours</option>
              <option value="cultural">Group Tours</option>
            </TextField>
          </Grid>

          {/* Find Now Button */}
          <Grid item xs={12} md={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: 55,
                fontWeight: "bold",
                backgroundColor: "#FF6A3D",
                ":hover": { backgroundColor: "#FF7A3D" },
              }}
            >
              Find Now
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Tourist places Cards */}

      <Box sx={{ position: "relative" }}>
        <TouristArea />
        <BgVideo />
      </Box>
      {/* Google map for places */}
      <Suspense
        fallback={
          <Box>
            <Skeleton variant="rectangular" height={450} sx={{ borderRadius: 2 }} />
          </Box>
        }
      >
        <MapWithMarkers />
      </Suspense>

      {/* Customers Reviews */}
      <Reviews />
    </Box>
  );
}
