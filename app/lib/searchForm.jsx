"use client";

import { Box, Button, Grid, TextField } from "@mui/material";

export default function SearchTours() {
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
          InputLabelProps={{ shrink: true }}
          sx={{ backgroundColor: "white" }}
        />
      </Grid>

      {/* Select Type Field */}
      <Grid item xs={12} md={3}>
        <TextField
          label="Choose..."
          select
          SelectProps={{ shrink: true }}
          variant="outlined"
          fullWidth
          onChange={(e) => e.target.value}
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
  </Box>;
}
