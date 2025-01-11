"use client"; // Error boundaries must be Client Components

import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console?.error(error);
  }, [error]);

  return (
    <Box>
      <Typography>Something went wrong!</Typography>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
