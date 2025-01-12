"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      number: "",
      date: "",
      message: "",
    });

    alert("Thanks for your submission");

    // TODO:Fetch the data to upload database using API call

    /* Navigate Booked page */
    router.push("/booked");
  };

  return (
    <Box
      id="booking-form"
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
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          name="name"
          onChange={handleChange}
          value={data.name}
          label="Your Name"
          fullWidth
          required
        />
        <TextField
          name="email"
          type="email"
          onChange={handleChange}
          value={data.email}
          label="Your Email"
          fullWidth
          required
        />
        <TextField
          name="number"
          type="number"
          onChange={handleChange}
          value={data.number}
          label="Phone"
          fullWidth
          required
        />
        <TextField name="date" type="date" onChange={handleChange} value={data.date} fullWidth />
        <TextField
          name="message"
          onChange={handleChange}
          value={data.message}
          label="Message"
          fullWidth
          multiline
          rows={3}
        />
        <Button
          type="submit"
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
