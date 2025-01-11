import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const BookingForm = () => {
  return (
    <Box
      component={Paper}
      sx={{
        p: 3,
        boxShadow: "0px 4px 10px rgba(183, 153, 143, 0.5)",
        borderRadius: 2,
        width: "100%",
        height: "75%",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Book This Tour
      </Typography>
      <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Your Name" fullWidth />
        <TextField label="Your Email" fullWidth />
        <TextField label="Phone" fullWidth />
        <TextField label="Tickets" fullWidth />
        <TextField label="Date" fullWidth />
        <TextField label="Message" fullWidth multiline rows={3} />
        <Button
          sx={{ boxShadow: "0px 4px 10px rgba(225, 135, 105, 0.5)" }}
          variant="contained"
          color="primary"
        >
          Book Tour
        </Button>
      </Box>
    </Box>
  );
};

export default BookingForm;
